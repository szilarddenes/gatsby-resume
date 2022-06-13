import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const ProfileImage=()=>{
  return(
    <StaticImage 
    src="../img/profile.jpg"   
    objectFit="cover"
    maxWidth={1448}
    alt="hero"
    loading="eager"
    />
  )
}

export default ProfileImage;