import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import './Header.css';
import { Link,useNavigate } from 'react-router-dom';

export const Header = ({backButton}) => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      {backButton ? (<IconButton onClick={() => navigate(-1)}><ArrowBackIos fontSize='large' className='header_icon' /></IconButton>):(
        <IconButton><PersonIcon className='header_icon' fontSize='large' /></IconButton>
      )} 
      <Link to="/"><img src='https://1000logos.net/wp-content/uploads/2019/06/tinder-logo.jpg' alt='' /></Link>
      <Link to="/Chat"><IconButton><ForumIcon className='header_icon' fontSize='large'/></IconButton></Link>
    </div>
  )
}

export default Header;
