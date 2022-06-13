import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'



// export default ProfileImage
//   objectFit='cover'
//   maxWidth={1448}
//   alt='hero'
//   loading='eager'

export default function ProfileImage() {
  return (
    <StaticImage
      src="src/profile.jpg"
      width={300}
      height={300}
      quality={95}
      alt='alt text'
    />
  )
}
