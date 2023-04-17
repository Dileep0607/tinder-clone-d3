import React from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import SwipeButtons from './components/SwipeButtons'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  )
}

export default Home
