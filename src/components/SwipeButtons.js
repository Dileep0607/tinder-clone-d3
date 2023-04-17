import React from 'react';
import './SwipeButtons.css';
import { Replay } from '@material-ui/icons'
import { Close } from '@material-ui/icons'
import { StarRate } from '@material-ui/icons'
import { Favorite } from '@material-ui/icons'
import { FlashOn } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'


const SwipeButtons = () => {
  return (
    <div className='button'>
    <IconButton className='btn-repeat'><Replay fontSize="large" /></IconButton>
    <IconButton className='btn-left'><Close fontSize="large" /></IconButton>
    <IconButton className='btn-star'><StarRate fontSize="large" /></IconButton>
    <IconButton className='btn-right'><Favorite fontSize="large" /></IconButton>
    <IconButton className='btn-lightning'><FlashOn fontSize="large" /></IconButton>
    </div>
  )
}

export default SwipeButtons
