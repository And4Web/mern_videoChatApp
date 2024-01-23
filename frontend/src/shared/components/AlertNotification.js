import React from 'react'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import {connect} from 'react-redux';
import {getActions} from '../../redux/actions/alertActions';


function AlertNotification(props) {
  console.log("alertNotification props: ", props)
  return (
    <Snackbar
    anchorOrigin = {{vertical: "bottom", horizontal: "center" }}
    open={props.showAlert}
    onClose={props.hideAlert}
    autoHideDuration={5000}
    >
      <Alert severity="info">{props.alertMessage}</Alert>
    </Snackbar>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.alert
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(mapStateToProps, mapActionsToProps)( AlertNotification)