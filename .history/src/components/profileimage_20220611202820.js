import React from 'react'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'

// const ProfileImage = () => {
//   return (
//     <StaticImage
//       src='https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png'
//       width={200}
//       quality={90}
//       alt='alt text'
//     />
//   )
// }

// export default ProfileImage
//   objectFit='cover'
//   maxWidth={1448}
//   alt='hero'
//   loading='eager'

export default function ProfileImage() {
  return <StaticImage src="./profile.jpg" width={300} quality={90} alt="alt text"/>
}
