import React from 'react'
import Header from './Header';
import Chat from './Chat';

const Chats = () => {
  return (
    <>
     <div>
      <Header backButton="/" />
    </div>
    <div className='chats'>
      <Chat 
        name= 'Sarah'
        message= 'Hey! what r u doing..'
        timestamp= '40 sec ago'
        profilepic= 'https://tse3.mm.bing.net/th?id=OIP.XknqdjS-T8MtqEaKHEiknQHaJX&pid=Api&P=0'
      />
      <Chat 
        name= 'Ellen'
        message= 'Hello 🙋‍♀️..'
        timestamp= '3 hours ago'
        profilepic= 'https://tse1.mm.bing.net/th?id=OIP.WCva_gghqxZ39LYZ-4IVlgHaHZ&pid=Api&P=0'
      />
      <Chat 
        name= 'Sandra'
        message= 'How r u?😎'
        timestamp= '1 week ago'
        profilepic= 'https://tse1.explicit.bing.net/th?id=OIP.eFIyov4jnzI6ZEDEI9npHwHaE8&pid=Api&P=0'
      />
      <Chat 
        name= 'perry'
        message= '👍'
        timestamp= '2 days ago'
        profilepic= 'https://tse2.mm.bing.net/th?id=OIP.pFll1X0eQl30HYxfrPGMrwHaLX&pid=Api&P=0'
      />
    </div>
    </>
  )
}

export default Chats;
