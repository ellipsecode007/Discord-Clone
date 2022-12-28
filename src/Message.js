import { Avatar } from '@mui/material';
import React from 'react';
import './Message.css';

function Message() {
  return (
    <div className='message'>
        <Avatar/>
        <div className="message___info">
            <h4>Ellipse
                <span className='message___timestamp'>dd/mm/yyyy</span>
            </h4>
            <p>Test Message</p>
        </div>
    </div>
  )
}

export default Message