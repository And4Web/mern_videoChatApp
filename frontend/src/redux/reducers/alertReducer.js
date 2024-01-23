import alertActions from '../actions/alertActions';

const initialState = {
  showAlert: false,
  alertMessage: null,
}

const alertReducer = (state=initialState, action) => {
  switch(action.type){
    case alertActions.SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alertMessage: action.content
      }
    case alertActions.HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
        alertMessage: null,
      }

    default: return state
  }
}

export default alertReducer