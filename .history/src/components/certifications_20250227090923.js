import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Certifications = ({ certifications = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const handleModalClick = (e) => {
    e.stopPropagation()
    setIsModalOpen(false)
  }

  // Add check for empty certifications
  if (!certifications || certifications.length === 0) {
    return null  // Don't render anything if no certifications
  }

  return (
    <section id='certifications' className='row'>
      <aside className='col-sm-3'>
        <h3>Certifications</h3>
      </aside>
      <div className='col-sm-9'>
        <div className='row'>
          {certifications.map((cert, index) => (
            <div key={index} className='col-sm-12'>
              <h4 className='strike-through'>
                <span>{cert.title}</span>
                <span className='date'>{cert.date}</span>
              </h4>
              <div className='website pull-right'>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
              <div
                className="cert-thumbnail-container"
                onClick={() => setIsModalOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setIsModalOpen(true)
                }}
              >
                <StaticImage
                  src="../img/ms_certification.webp"
                  alt={`${cert.title} Certificate`}
                  className="cert-thumbnail"
                  imgClassName="no-border-radius"
                  width={300}
                  placeholder="blurred"
                  style={{ borderRadius: 0 }}
                />
                <div className="cert-overlay no-border-radius">
                  <span>Tap to view</span>
                </div>
              </div>

              {isModalOpen && (
                <div
                  className="cert-modal-overlay no-border-radius"
                  onClick={handleModalClick}
                  role="button"
                  tabIndex={-1}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setIsModalOpen(false)
                  }}
                >
                  <div className="cert-modal no-border-radius">
                    <StaticImage
                      src="../img/ms_certification.webp"
                      alt={`${cert.title} Certificate`}
                      className="cert-modal-image"
                      imgClassName="no-border-radius"
                      width={900}
                      placeholder="blurred"
                      style={{ borderRadius: 0 }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications 