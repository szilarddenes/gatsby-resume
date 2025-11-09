import React from 'react'

const SkillsMain = ({ skillsMain }) => (


  <section id='skills' className='row'>
    <aside className='col-sm-3'>
      <h3>Skills</h3>
    </aside>
    <div className='col'>
      <div className='row'>
        {skillsMain.map((skill) => (
          <div className='col-sm-12' key={skill.name}>
            <div className='name'>
              <h4 className='strike-through'>
                <span>{skill.name}</span>
                <span className='colorTeal'>{skill.level}</span>
              </h4>
            </div>

            {/* Geology Skills Section with keywords */}
            {skill.keywords && !skill.software && !skill.highlights && (
              <ul className='keywords'>
                {skill.keywords.map((keyword, index) => (
                  <li key={index}>{keyword}</li>
                ))}
              </ul>
            )}

            {/* Geoscience Software Section with detailed paragraphs */}
            {skill.software && skill.software.map((sw) => (
              <div key={sw.name} style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ marginBottom: '0.5rem', fontWeight: '600', fontSize: '1.1rem' }}>
                  {sw.name} <span style={{ fontSize: '0.85rem', fontWeight: 'normal', opacity: '0.7' }}>— {sw.experience}</span>
                </h5>
                <p style={{ marginBottom: '0', lineHeight: '1.6' }}>{sw.description}</p>
              </div>
            ))}

            {/* Web Development & Programming Section */}
            {skill.highlights && (
              <div style={{ position: 'relative' }}>
                {skill.description && <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>{skill.description}</p>}
                <ul className='keywords'>
                  {skill.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <div id='anim'>
                  <div title='html' className='anim anim1 colorRed'>
                    html
                  </div>
                  <div title='css' className='anim anim2 colorGreen'>
                    css
                  </div>
                  <div title='javascript' className='anim anim3 colorTeal'>
                    javascript
                  </div>
                  <div title='C#' className='anim anim1 colorYellow'>
                    C#
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>


)

export default SkillsMain
