import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Certifications = ({ certifications }) => (
  <section id='certifications' className='row'>
    <aside className='col-sm-3'>
      <h3>Certifications</h3>
    </aside>
    <div className='col-sm-9'>
      <div className='row'>
        {certifications.map((cert, index) => (
          <div key={index} className='col-sm-12'>
            <div className='item'>
              <h4 className='strike-through'>
                <span>{cert.title}</span>
                <span className='date'>{cert.date}</span>
              </h4>

              <div className='website pull-right'>
                <a href={cert.url} target='_blank' rel='noopener noreferrer'>
                  View Certificate
                </a>
              </div>

              <div className='cert-thumbnail-container'>
                <input type="checkbox" id={`zoom-${index}`} className="zoom-checkbox" />
                <label htmlFor={`zoom-${index}`} className="zoom-label">
                  <StaticImage
                    src='../img/ms_certification.webp'
                    alt={`${cert.title} Certificate`}
                    className='cert-thumbnail'
                    imgClassName='no-border-radius'
                    width={300}
                    placeholder='blurred'
                    style={{ borderRadius: 0 }}
                  />
                  <div className="cert-overlay">
                    <span>Tap to zoom</span>
                  </div>
                </label>
                <div className="cert-modal">
                  <StaticImage
                    src='../img/ms_certification.webp'
                    alt={`${cert.title} Certificate`}
                    className='cert-modal-image'
                    imgClassName='no-border-radius'
                    width={900}
                    placeholder='blurred'
                    style={{ borderRadius: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Certifications 