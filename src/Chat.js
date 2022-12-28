import React from 'react'
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message.js'

function Chat() {
  return (
    <div className='chat'>
        <ChatHeader></ChatHeader>
        <div className="chat___messages">
            <Message/>
        </div>
        <div className="chat___input">
            <AddCircleIcon fontSize='large'/>
            <form>
                <input placeholder='Test'/>
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