import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Certifications = () => (
  <section id='certifications' className='row'>
    <aside className='col-sm-3'>
      <h3>Certifications</h3>
    </aside>
    <div className='col-sm-9'>
      <div className='row'>
        <div className='col-sm-12'>
          <h4 className='strike-through'>
            <span>Foundational C# with Microsoft</span>
            <span className='date'>February 26, 2024</span>
          </h4>
          <div className='website pull-right'>
            <a 
              href="https://www.freecodecamp.org/certification/szilarddenes/foundational-c-sharp-with-microsoft" 
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
          <StaticImage
            src="../img/csharp-cert.png"
            alt="Microsoft C# Certification"
            className="certification-image"
            width={600}
          />
        </div>
      </div>
    </div>
  </section>
)

export default Certifications 