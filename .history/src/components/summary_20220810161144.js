import React from 'react'

const Summary = () => (
  <section id='project' className='row'>
    <aside className='col-sm-3'>
      <h3>Summary</h3>
    </aside>
    <div className='col-sm-9'>
      <div className='row'>
        <div className='col-sm-12 projectCards'>
          <h4 className='colorGreen'> Ambition </h4>
          <div className='website pull-right'>
            <li className='paddingLeft'>
              To grow in professional environment and became a Fullstack Software Engineer in
              a couple of years.
            </li>
          </div>
          <h4 className='colorGreen'> Experience </h4>
          <small>
            Note: self-taught learning, focus on delivering projects for
            clients, or with learning purposes – The years of experience highlighted below
            is <y>asynchronous </y>, I’ve learnt for the given project what I
            needed, next to my 9-5 regular job.
          </small>
          <hr />
          <h6>Web Development: </h6>
          <ul className='highlights'>
            <li className='bullet'>
              <y>4 years </y> of HTML, CSS and Javascript knowledge: I've learnt
              the basics in 3 months and created my first website using these
              languages: <br />
              <small>🔗 </small>{' '}
              <a
                href='https://www.jointadventure.co/work/munkaportal.ro/'
                target='_blank'>
                munkaportal.ro
              </a>
            </li>
            <li className='bullet'>
              <y> 2 years </y> in WordPress: made several offline projects, and
              in 10-12 months I coded up the <small>🔗 </small>{' '}
              <a
                href='https://www.jointadventure.co/work/jobp.eu/'
                target='_blank'>
                jobp.eu
              </a>{' '}
              . For learning purposes I created a WordPress plugin. I also had a
              converting webshop, where I made minor/major modifications in the
              theme.
            </li>
            <li className='bullet'>
              <y>1.5 years </y> in the world of React and GatsbyJS. I created 3
              websites using this technology.
              <br />
              <small>🔗 </small>{' '}
              <a href='https://www.jointadventure.co' target='_blank'>
                jointadventure.co
              </a>
              <br />
              <small>🔗 </small>{' '}
              <a
                href='https://www.jointadventure.co/work/gpoauto.ro/'
                target='_blank'>
                gpoauto.ro
              </a>
              <br />
              <a href='#'>
                {' '}
                <small>📃 </small> solid.garden
              </a>
            </li>
          </ul>
          <br />
          <h6>Software Development </h6>
          <ul className='highlights'>
            <li className='bullet'>
              I’ve learnt<y> VBA in 2015</y> to automate tasks in Excel
              databases (the way I got my first job 🥳). This spring I delivered
              and sold an Excel software written in <y>VBA (4-6 weeks) </y> to
              automate PDF template fill out with customer data for a company.
              At this point I decided to became a programmer.
            </li>
            <li className='bullet'>
              I have been working in <y> Odoo ERP for 4 months</y>, where I
              write small code snippets and basic logic in Python with the
              purpose of automation of different workflows.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Summary
