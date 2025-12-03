import React from 'react'
import ProfileImage from './profileimage.js'

const Header = ({ basics }) => (
  <header id='header'>
    <div className='container'>
      <div className='row headerRow'>
        <div>
          <h1>{basics.name}</h1>
          <h2>{basics.label}</h2>
          <ProfileImage className='profileImage'/>
          
        </div>
      </div>
    </div>
  </header>
)

export default Header
