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
                <li className="paddingLeft">To get my first job in the world of programming to grow in a professional environment.</li>
                <li className="paddingLeft">To became a Fullstack Software Engineer and build SaaS products in a couple of years.
                </li>
            </div>
            <h4 className='colorGreen'> Experience </h4>
            <small>Note: self-taught learning, focus on delivering the projects for clients, or for myself –  The years of experience highlighted below is asynchronous, I’ve learnt for the given project what I needed, next to my 9-5 regular job. 
            </small>
            <hr />
            <h6>Web Development: </h6>
            <ul className='highlights'>
                 <li className='bullet'>
                 4 years of HTML, CSS and Javascript knowledge: I've learnt the basics in 3 months and created my first website using these languages. <br />
                 <small>🔗 </small> <a href="https://www.jointadventure.co/work/munkaportal.ro/" target="_blank">munkaportal.ro</a> 
                 </li>
                 <li className='bullet'>
                 2 years in WordPress: made several offline projects, and in 10-12 months I coded up the <small>🔗 </small> <a href="https://www.jointadventure.co/work/jobp.eu/" target="_blank">jobp.eu</a> . For learning purposes I created a WordPress plugin. I also had a converting webshop, where I made minor/major modifications in the theme.
                 </li>
                 <li className='bullet'>
                 1.5 years in the world of React and GatsbyJS. I created 3 websites using this technology.  
                 <br />
                 <small>🔗 </small> <a href="https://www.jointadventure.co/work/munkaportal.ro/" target="_blank">munkaportal.ro</a> 


                 </li>
             </ul>
            <h6>Software Development </h6>
            <ul className='highlights'>
                 <li className='bullet'>highlights</li>
             </ul>
            
        
          </div>
     
      </div>
    </div>
  </section>
)

export default Summary
