import React from 'react'

const Skills = ({ skills }) => (
  <section id='skills' className='row'>
    <aside className='col-sm-3'>
      <h3>Skills</h3>
    </aside>
    <div className='col'>
      <div className='row'>
        {skills.map((skill) => (
          <div className='col-sm-12'>
            <div className='name'>
              <h4 className='strike-through'>
                <span>{skill.name}</span>
                <span className='colorTeal'>{skill.level}</span>
              </h4>
              <div className='anim'>html</div>
              <div className='anim'>css</div>
              <div className='anim'>javascript</div>
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

export default Skills