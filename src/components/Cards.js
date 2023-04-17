import React from 'react'
import { useState,useEffect } from 'react'
import TinderCard from 'react-tinder-card'
// import firebase from './firebase';
import './Cards.css'

const Cards = () => {
    const [people,setPeople] = useState([
        {
            id: 1,
            name: 'Albert Olive',
            imageUrl: 'https://images.unsplash.com/photo-1628633962805-fe9a25701426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDB8MTEwOTUwNHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        },
        {
            id: 2,
            name: 'Elijah Hiett',
            imageUrl: 'https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        },
        {
            id: 3,
            name: 'Leandra Rieger',
            imageUrl: 'https://images.unsplash.com/photo-1648127543144-ff678dd07c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwxMTA5NTA0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        },
        {
            id: 4,
            name: 'Warren Wong',
            imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        },
    ]);

    useEffect(() => {
        // database.collection('people').onSnapshot(snapshot => (
        //     setPeople(snapshot.docs.map(doc => doc.data()))
        // ))
    },[]);
  return (
    <div>
        <div className='card_container'>
      {people.map((person) => (
        <TinderCard 
        className='swipe' 
        key={person.id}
        preventSwipe={['up','down']}
        >
            <div className='card' style={{ backgroundImage: `url(${person.imageUrl})` }}>
                <h3>{person.name}</h3>
            </div>
        </TinderCard>
      ))}
      </div>
    </div>
  )
}

export default Cards



