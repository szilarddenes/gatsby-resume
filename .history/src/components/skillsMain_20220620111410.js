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
            <div id="anim">

            
            <div title='html' className='anim'>
              html
            </div>
            <div title='cs' className='anim'>
              css
            </div>
            <div title='javascript' className='anim'>
              javascript
            </div>
            </div>
            <ul className='keywords'>
              {skill.keywords.map((keyword) => (
                <li>{keyword}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default SkillsMain
