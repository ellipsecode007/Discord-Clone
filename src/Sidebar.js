import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Sidebar.css';
import SidebarChannels from './SidebarChannels';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
  return (
    <div className='sidebar'>
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
      <div className="sidebar___channelsList">
      <SidebarChannels></SidebarChannels>
    </div>
    </div>
    <div className="sidebar___voice">
        <SignalCellularAltIcon className='sidebar___voiceIcon' fontSize='large'>
        </SignalCellularAltIcon>
        <div className="sidebar___voiceInfo">
      <h3>Voice Connected</h3>
      <p>stream</p>
    </div>
    <div className="sidebar___voiceIcons">
        <CallIcon></CallIcon>
    </div>
    </div>
    <div className="sidebar___profile">
      <Avatar 
      src= "https://i.pinimg.com/736x/65/c4/3f/65c43fc01c0ec482be114b9fb011b489.jpg"></Avatar>
      <div className="sidebar___profileInfo">
        <h3>Ellipse</h3>
        <p>#2512</p>
      </div>
      <div className="sidebar___profileIcons">
        <MicIcon></MicIcon>
        <HeadsetIcon/>
        <SettingsIcon/>
      </div>
      
    </div>
    </div>
  )
}

export default Sidebar