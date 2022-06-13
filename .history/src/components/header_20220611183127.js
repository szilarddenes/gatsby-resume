import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ basics }) => (
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-sm-push-3">
          <h1>{basics.name}</h1>
          <h2>{basics.label}</h2>
          {/* <StaticImage src="../img/profile.jpg"   
          as={BorderedImage} 
          objectFit="cover"
          maxWidth={1448}
          alt="hero"
          loading="eager"
          /> */}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
