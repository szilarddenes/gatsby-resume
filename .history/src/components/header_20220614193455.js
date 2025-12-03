import React from 'react'
import ProfileImage from './profileimage.js'

const Header = ({ basics }) => (
  <header id='header'>
    <div className=''>
      <div className='headerRow'>
        <div className='headerText'>
          <h1 className="colorYellow">{basics.name}</h1>
          <h2 className="colorGreen">{basics.label}</h2>
        </div>
          <ProfileImage className='profileImage' />
      </div>
    </div>
  </header>
)

export default Header
