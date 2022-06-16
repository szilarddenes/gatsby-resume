import React from 'react'

const Project = ({ projects }) => (
  <section id='project' className='row'>
    <aside className='col-sm-3'>
      <h3>Projects ongoing</h3>
    </aside>
    <div className='col-sm-9'>
      <div className='row'>
        {projects.map((project) => (
          <div className='col-sm-12'>
            <h4 className='colourTeal'>
              {project.name}
            </h4>
            <div className='website pull-right'>
              {project.url ?}
              <a href={project.url} target="_blank">{project.url}</a>
            </div>
            <div className='position'>{project.position}</div>
            <div className='summary'>
            <p>{project.description}</p>
            </div>
            {project.highlights && (
              <React.Fragment>
                <h4>Highlights</h4>
                <ul className='highlights'>
                  {project.highlights.map((highlight) => (
                    <li className='bullet'>{highlight}</li>
                  ))}
                </ul>
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Project
