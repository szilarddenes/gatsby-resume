import React from 'react'

const SkillsMain = ({ skillsMain }) => (


  <section id='skills' className='row'>
    <aside className='col-sm-3'>
      <h3>Skills</h3>
    </aside>
    <div className='col'>
      <div className='row'>
        {skillsMain.map((skill) => (
          <div className='col-sm-12'>
            <div className='name'>
              <h4 className='strike-through'>
                <span>{skill.name}</span>
                <span className='colorTeal'>{skill.level}</span>
              </h4>
            </div>
            <ul className='keywords'>
              {skill.keywords.map((keyword) => (
                <li>{keyword}</li>
              ))}
            </ul>
            <div id='anim'>
              <div title='html' className='anim anim1 colorTeal'>
                html
              </div>
              <div title='cs' className='anim anim2 colorGreen'>
                css
              </div>
              <div title='javascript' className='anim anim3 color'>
                javascript
              </div>
              <div title='javascript' className='anim anim1 colorYellow'>
                C#
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  
)

export default SkillsMain
