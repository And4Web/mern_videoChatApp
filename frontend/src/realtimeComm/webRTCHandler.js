// a function which will be responsible to get our local streams from our devices like the camera and microphone of the mobile phone or computer. functioning of these devices depends on the configuration we pass here.

import store from '../redux/store';
import {setLocalStream} from '../redux/actions/roomActions';

const audioOnlyConstraints = {
  audio: true,
  video: false,
}
const defaultConstraints = {
  audio: true,
  video: true,
}

export const getLocalStreamPreview = (audioOnly=false, callbackFunc) => {
  console.log("webRTCHandler audio Only>>> ", audioOnly)
  const constraints = audioOnly ? audioOnlyConstraints : defaultConstraints;
  console.log("webRTCHandler constraints>>> ", constraints)

  navigator.mediaDevices.getUserMedia(constraints).then(stream=>{
    console.log("webRTCHandler.js stream >>> ", stream)
    store.dispatch(setLocalStream(stream));
    callbackFunc();
  }).catch(error=>{
    console.log("webRTCHandler.js Error >>> ", error);
    console.log("can't get access to local stream...")
  })
}


