import React, { useState } from 'react';
// import Button from '@mui/material/Button';
import {connect} from 'react-redux'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {logout} from '../utils/auth';
import {getRoomActions} from '../../redux/actions/roomActions';

function DropdownMenu({audioOnly, setAudioOnly}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAudioOnlyChange = () => {
    setAudioOnly(!audioOnly)
  }

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{color: "white"}}>
        <MoreVertIcon/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleAudioOnlyChange}>
          {audioOnly ? "Disable audioOnly mode" : "Enable audioOnly mode"}
        </MenuItem>
        
      </Menu>
    </div>
  );
}

const mapStateToProps = ({room}) => {
  return {
    ...room
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...getRoomActions(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu)