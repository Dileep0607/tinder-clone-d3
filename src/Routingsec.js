import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './Home';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';


const Routingsec = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Chat" element={<Chats />} />
      <Route path="/Chat/:person" element={<ChatScreen />} />
    </Routes>
    </>
  );
}

export default Routingsec;
