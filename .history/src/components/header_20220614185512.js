import React from 'react'
import ProfileImage from './profileimage.js'

const Header = ({ basics }) => (
  <header id='header'>
    <div className='container'>
      <div className='headerRow'>
        <div>
          <h1 className="colorYellow">{basics.name}</h1>
          <h2 className="colorGreen">{basics.label}</h2>
          <ProfileImage className='profileImage' />
        </div>
      </div>
    </div>
  </header>
)

export default Header
