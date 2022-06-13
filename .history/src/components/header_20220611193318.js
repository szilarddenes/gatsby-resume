import React from 'react';
import ProfileImage from './profileimage.js'
import { StaticImage } from 'gatsby-plugin-image'


const Header = ({ basics }) => (
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-sm-push-3">
          <h1>{basics.name}</h1>
          <h2>{basics.label}</h2>
          <StaticImage
          src="../..//profile.jpg"
          width={1000}
          quality={90}
          alt="alt text"
        />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
