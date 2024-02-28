// a function which will be responsible to get our local streams from our devices like the camera and microphone of the mobile phone or computer. functioning of these devices depends on the configuration we pass here.

import store from '../redux/store';
import Peer from 'simple-peer';
import {setLocalStream, setRemoteStreams} from '../redux/actions/roomActions';
import * as socketConnection from './socketConnection';

const getConfiguration = () => {
  const turnIceServers = null;

  if(turnIceServers){
    // TODO: use TURN Server credentials:
    console.log("TurnIceServers")
  }else{
    console.warn("Using STUN Servers only.")
    return {
      iceServers: [
        {
          urls: "stun:stun.1.google.com:19302"
        }
      ]
    }
  }
}

const audioOnlyConstraints = {
  audio: true,
  video: false,
}
const defaultConstraints = {
  audio: true,
  video: true,
}

export const getLocalStreamPreview = (audioOnly=false, callbackFunc) => {
  // console.log("webRTCHandler audio Only>>> ", audioOnly)
  const constraints = audioOnly ? audioOnlyConstraints : defaultConstraints;
  // console.log("webRTCHandler constraints>>> ", constraints)

  navigator.mediaDevices.getUserMedia(constraints).then(stream=>{
    // console.log("webRTCHandler.js stream >>> ", stream)
    store.dispatch(setLocalStream(stream));
    callbackFunc();
  }).catch(error=>{
    // console.log("webRTCHandler.js Error >>> ", error);
    // console.log("can't get access to local stream...")
  })
}

let peers = {};

export const preapreNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;

  if(isInitiator){
    console.log("~ preparing new peers connection as Initiator ~")
  }else{
    console.log("~ preparing new peers connection as not Initiator ~")
  }
  
  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream
  });

  // Event Listeners:
  peers[connUserSocketId].on("signal", (data)=>{
    const signalData = {
      signal: data,
      connUserSocketId,
    }

    // PASS SIGNALING DATA TO OTHER USER
    socketConnection.signalPeerData(signalData);

  })

  peers[connUserSocketId].on("stream", (remoteStream)=>{
    // TODO
    // ADD NEW REMOTE STREAM TO OUR SERVER STORE:
    console.log("webRTCHandler.js remote stream came from other user, direct connection established >>> ", remoteStream);

    remoteStream.connUserSocketId = connUserSocketId;
    addNewRemoteStream(remoteStream);

  })

}

export const handleSignalingData = (signalingData) => {
  const {connUserSocketId, signal} = signalingData;

  if(peers[connUserSocketId]){
    peers[connUserSocketId].signal(signal);
  }
}

export const addNewRemoteStream = (remoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = [...remoteStreams, remoteStream];

  store.dispatch(setRemoteStreams(newRemoteStreams))
  // console.log("webRTCHandler.js peers >>> ", peers[])
}

export const closeAllConnections = () => {
  // on leave, close all direct connections which the user has established with other users.
  Object.entries(peers).forEach((mappedObject)=>{
    const connUserSocketId = mappedObject[0];
    console.log("webRTCHandler.js, closeAllConnections with >>> ", connUserSocketId);
    // 5
    console.log("webRTCHandler.js, all connections closed, peers destroyed >>> ");
  })
}

export const handleParticipantLeftRoom = (data) => {
  console.log("webRTCHandler.js handleParticipantLeftRoom >>> ", data);
  
  const {connUserSocketId} = data;

  console.log("webRTCHandler.js handleParticipantLeftRoom >>> ", peers[connUserSocketId]);

  if(peers[connUserSocketId]){
    peers[connUserSocketId].destroy();
    delete peers[connUserSocketId];
  }

  const remoteStreams = store.getState().room.remoteStreams;

  const newRemoteStreams = remoteStreams.filter((stream)=>
    stream.connUserSocketId !== connUserSocketId
  )

  store.dispatch(setRemoteStreams(newRemoteStreams));
}

// complicated: screen sharing switch outgoing tracks:
export const switchOutgoingTracks = (stream) => {
  for (let socket_id in peers) {
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};
/*
steps:-
-we are using Peer class from simple-peers package to create peers object.

-as we know that using webRTC if we want to create a direct connection between users, then we need the information about internet connection of the users i.e. Ice Candidates and the SDP information. getConfiguration() function will give the necessary information and configurations.

-Ice Candidates information comes from STUN Servers, if not available then from TURN Server as alternate server. TURN servers are not for free, so we need to use 3rd party provider to get access to the TURN server.

-If we don't have the TURN server then, we need to inform other users that we are not using TURN server. Because after the deployment, some of the connections we have outside of our local network may not work without TURN servers. in that case we can return a configuration that we can find our information on the internet if we connect to the STUN server that we need to define in the Ice candidates array, will be available at : "stun:stun.1.google.com:19302". this is a free STUN server to use provided by google. from this url we will get our internet details. this way we get the connection information without the TURN server right now.

-once the connection is established with other users, the webRTC peer object from simple-peer will take all of the tracks from the local stream and that will just broadcast to the other connected users.

-We also need to define event listeners. first would be on signal. if the signalling data comes, i.e. we receive the data about network internet connection from the STUN server, we need to share this with other users, i.e. our SDP data and our Ice candidates. PASS this SIGNALING DATA TO OTHER USERS.

-next event listener would be on stream. this event will be working if the connection is established with other users. they will be able to listen to this event stream, on that peer connection object, which is coming from the simple-peer. if that stream comes, we will create logic to add new remote stream to our server store, so that we can display/use it.

-after preparing the peer connection, from frontend socketConnection.js emit and event "conn-init" to the server to tell it that it should pass this event to the user with which it wants to create new connection but as isInitiator = true. 

-
*/ 