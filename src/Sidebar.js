import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
    <h2>Sidebar</h2>
    <div className='sidebar___top'>
      <h3>Ellipse Gaming</h3>
      <ExpandMoreIcon></ExpandMoreIcon>
    </div>
    <div className="sidebar___channels">
      <div className="sidebar___channelsHeader">
        <div className="sidebar___headers">
          <ExpandMoreIcon>
          </ExpandMoreIcon>
          <h4>Text Channels</h4>
        </div>
        <AddIcon className='sidebar___addChannels'>
        </AddIcon>
        
      </div>
    </div>
    </div>
  )
}

export default Sidebar