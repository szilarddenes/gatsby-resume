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
      src="../img/profile.jpg"
      width={200}
      height={200}
      quality={100}
      alt='profile image'
    />
  )
}
