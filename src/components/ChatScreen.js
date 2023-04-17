import React, { useState } from 'react'
import Header from './Header'
import './ChatScreen.css'
import { Avatar } from '@material-ui/core';

const ChatScreen = ({profilepic}) => {
    const [type,setType]=useState('')
    const [msg,setMsg] = useState([
        {
            name: 'Sarah',
            image: 'https://tse3.mm.bing.net/th?id=OIP.XknqdjS-T8MtqEaKHEiknQHaJX&pid=Api&P=0',
            msg:'Whats up ❤️',
        },
        {
            name: 'Sarah',
            image: 'https://tse3.mm.bing.net/th?id=OIP.XknqdjS-T8MtqEaKHEiknQHaJX&pid=Api&P=0',
            msg:'How its going...',
        },
        {
            msg:'Good!what about u?',
        },
    ]);
    const handlesend=(e)=>{
        e.preventDefault();
        setMsg([...msg,{msg : type}]);
        setType('');
    }
  return (
    <>
    <div>
      <Header backButton="/chat" />
    </div>
    <div className='chatscreen'>
      <h1>YOU MATCHED {msg.name} on 07/02/22 </h1>
      {msg.map((message) => {
       return(
        message.name ?(
            <div className='chatscreen_msg' key={msg.name}>
            <Avatar 
                className='chatscreen_image' 
                alt={message.name} 
                src={message.image} 
            />
            <p className='chatscreen_text'>{message.msg}</p>
        </div>
        ):(
            <div className='chatscreen_msg'>
                <p className='chatscreen_textuser'>{message.msg}</p>
            </div>
        ))
      })}
    </div>
    <div>
        <form className='chatscreen_input'>
            <input 
            value={type} 
            type='text' 
            onChange={(e) => setType(e.target.value)}
            className='chatscreen_inputfield' 
            placeholder='Type the Message...' />
            <button type='submit' onClick={handlesend} className='chatscreen_btn'>SEND</button>
        </form>
    </div>
    </>
  );
}

export default ChatScreen
