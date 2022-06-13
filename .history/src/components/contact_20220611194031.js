import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Contact = ({ basics }) => (
  <section id='contact' className='row'>
    <aside className='col-sm-3'>
      <h3>Contact</h3>
    </aside>
    <div className='col-sm-9'>
      <div className='row'>
        <div className='col-sm-6'>
          <strong>Email</strong>
          <div className='email'>{basics.email}</div>
        </div>
        <div className='col-sm-6'>
          <strong>Phone</strong>
          <div className='phone'>{basics.phone}</div>
        </div>
        <div className='col-sm-6'>
          <strong>Website</strong>
          <div className='website'>
            <a href={basics.url}>{basics.url}</a>
          </div>
        </div>
      </div>
    </div>
    <StaticImage
      src="https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png"
      width={1000}
      quality={90}
      alt='alt text'
    />
  </section>
)

export default Contact
