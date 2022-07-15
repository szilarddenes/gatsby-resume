import React from 'react'

const Summary = () => (
  <section id='project' className='row'>
    <aside className='col-sm-3'>
      <h3>Projects ongoing</h3>
    </aside>
    <div className='col-sm-9'>
      <div className='row'>
       
          <div className='col-sm-12 projectCards'>
            <h4 className='colorGreen'>{project.name}</h4>
            <div className='website pull-right'>
              {project.url ? (
                <a href="" target='_blank'>
                  link
                </a>
              ) : (
                ''
              )}
            </div>
            <div className='position'>{project.position}</div>
            <div className='summary'>
              <p>{project.description}</p>
            </div>
            {project.highlights && (
              <React.Fragment>
                <hr />
                <h6>Highlights: </h6>
                <ul className='highlights'>
                  {project.highlights.map((highlight) => (
                    <li className='bullet'>{highlight}</li>
                  ))}
                </ul>
              </React.Fragment>
            )}
          </div>
     
      </div>
    </div>
  </section>
)

export default Summary
