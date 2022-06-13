import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ProfileImage = () => {
  return (
  <StaticImage
  src="https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png"
  width={100}
  quality={90}
  alt='alt text'
/>
<div>alma</div>
)

}

export default ProfileImage
//   objectFit='cover'
//   maxWidth={1448}
//   alt='hero'
//   loading='eager'
