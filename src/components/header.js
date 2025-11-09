import React from 'react'
import ProfileImage from './profileimage.js'
import '../styles/header.css'

const Header = ({ basics }) => (
  <header id='header'>
    <div className='container'>
      <div className='headerRow'>
        <div className='headerText'>
          <h1 className="colorYellow">{basics.name}</h1>
          <h2 className="colorGreen">{basics.label}</h2>
          <a
            href="/resume-szilard-denes.pdf"
            className="downloadResumeBtn"
            download="Szilard-Denes-Resume.pdf"
            aria-label="Download Resume as PDF"
          >
            Download Resume
          </a>
        </div>
          <ProfileImage className='profileImage' />
      </div>
    </div>
  </header>
)

export default Header
