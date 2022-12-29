import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';


function ChatHeader() {
  return (
    <div className='chatHeader'>
        <div className="chatHeader___left">
        <h3>
                <span className="chatHeader___hash">#</span>
                Valorant X
            </h3>
        </div>
        <div className="chatHeader___right">
            <NotificationsIcon/>
            <PeopleAltIcon/>
            <div className="chatHeader___search">
                <input placeholder='Search'></input>
                <SearchIcon></SearchIcon>
            </div>
            <SendRoundedIcon></SendRoundedIcon>
            <HelpRoundedIcon></HelpRoundedIcon>
        </div>
    </div>
  )
}

export default ChatHeader