import React, { useEffect, useState } from 'react'
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message.js'
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

function Chat() {
    const channelId = useSelector(selectChannelId);
    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages,setMessages] = useState([]);

    useEffect(() => {
        // console.log(channelId);
        if(channelId)
        {
            console.log(channelId);
        db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timsstamp", "asc")
        .onSnapshot((snapshot)=>
        setMessages(snapshot.docs.map((doc)=>doc.data()))
        );
        }
    },[channelId])

    const sendMessage = e =>{
        e.preventDefault();
        // console.log("djj");
        db.collection('channels').doc(channelId).collection('messages')
        .add({
            timsstamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });  
        setInput("");
    }

  return (
    <div className='chat'>
        <ChatHeader channelName = {channelName}></ChatHeader>
        <div className="chat___messages">
            {messages.map((message) =>(
                <Message timestamp={message.timsstamp} user={message.user} message={message.message} />
            ))} 
        </div>
        <div className="chat___input">
            <AddCircleIcon fontSize='large'/>
            <form>
                <input 
                value ={input}
                disabled={!channelId}
                onChange={(e) => setInput(e.target.value)} 
                placeholder={`Message ${channelName}`}/>
                <button className='chat___inputButton' type='submit'
                onClick={sendMessage}>send</button>
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