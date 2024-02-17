// a function which will be responsible to get our local streams from our devices like the camera and microphone of the mobile phone or computer. functioning of these devices depends on the configuration we pass here.

import store from '../redux/store';
import {setLocalStream} from '../redux/actions/roomActions';

const onlyAudioConstraints = {
  audio: true,
  video: false,
}
const defaultConstraints = {
  audio: true,
  video: true,
}

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

  navigator.mediaDevices.getUserMedia(constraints).then(stream=>{
    store.dispatch(setLocalStream(stream));
    callbackFunc();
  }).catch(error=>{
    console.log("webRTCHandler.js Error >>> ", error);
    console.log("can't get access to local stream...")
  })
}


