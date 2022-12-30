import React, { useState } from 'react'
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message.js'
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';

function Chat() {
    const channelId = useSelector(selectChannelId);
    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");


  return (
    <div className='chat'>
        <ChatHeader channelName = {channelName}></ChatHeader>
        <div className="chat___messages">
            <Message/>
        </div>
        <div className="chat___input">
            <AddCircleIcon fontSize='large'/>
            <form>
                <input value ={input} onChange={e => setInput(e.target.value)} placeholder='Test'/>
                <button className='chat___inputButton' type='submit'>send</button>
            </form>
            <div className="chat___inputIcons">
                <GifBoxIcon/>
                <EmojiEmotionsIcon/>

            </div>
        </div>
    </div>
  )
}

export default Chat