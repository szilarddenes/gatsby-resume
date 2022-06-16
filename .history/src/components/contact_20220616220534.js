import React from 'react'

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
          </div>
            <a href={basics.url} target="_blank" >{basics.url}</a> <small> temporary while building the main https://solid.garden </small>
        </div>
      </div>
    </div>

  </section>
)

export default Contact
