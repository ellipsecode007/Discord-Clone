import React, { useEffect, useState } from 'react'
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
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import db, { auth } from './firebase';

function Sidebar() {
  const user =  useSelector(selectUser);
  const [channels, setChannels] = useState([]);
  useEffect(() =>{
      db.collection('channels').onSnapshot(snapshot => (
        setChannels(snapshot.docs.map(doc =>({
          id:doc.id,
          channel: doc.data(),
        })))
      ));
  },[])

  const handleAddChannel = () => {
    const channelName = prompt("Channel Name");
    if(channelName)
    {
      db.collection('channels').add({
        channelName: channelName,
      })
    }
  };
  
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
        <AddIcon onClick={handleAddChannel} className='sidebar___addChannels'>
        </AddIcon>
      </div>
      <div className="sidebar___channelsList">
        {channels.map(({id , channel}) =>(
          <SidebarChannels key={id} id = {id} channelName={channel.channelName}></SidebarChannels>
        ))}
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
      <Avatar onClick = { ()=>auth.signOut()} 
      src= {user.photo} alt = "https://i.pinimg.com/736x/65/c4/3f/65c43fc01c0ec482be114b9fb011b489.jpg"></Avatar>
      <div className="sidebar___profileInfo">
        <h3>{user.displayName}</h3>
        <p>#{user.uid.substring(0,5)}</p>
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