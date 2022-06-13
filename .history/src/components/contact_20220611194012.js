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
      src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
      width={1000}
      quality={90}
      alt='alt text'
    />
  </section>
)

export default Contact
