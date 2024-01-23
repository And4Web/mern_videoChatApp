const alertActions = {
  SHOW_ALERT: "ALERT.SHOW_ALERT",
  HIDE_ALERT: "ALERT.HIDE_ALERT"
}

export const getActions = (dispatch) => {
  return {
    showAlert: (content) => {
      return dispatch(showAlert(content))
    },
    hideAlert: () => {
      return dispatch(hideAlert())
    }
  }
}

export const showAlert = (content) => {
  return {type: alertActions.SHOW_ALERT, content}
}
export const hideAlert = () => {
  return {type: alertActions.HIDE_ALERT}
}

export default alertActions;