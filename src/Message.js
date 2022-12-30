import { Avatar } from '@mui/material';
import React from 'react';
import './Message.css';

function Message({timestamp, user, message }) {
  return (
    <div className='message'>
        <Avatar src={user.photo}/>
        <div className="message___info">
            <h4>{user.displayName}
                <span className='message___timestamp'>
                  {new Date(timestamp?.toDate()).toUTCString()}
                </span>
            </h4>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Message