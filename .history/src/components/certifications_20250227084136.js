import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Certifications = () => {
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

  return (
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
                alt="Microsoft C# Certification"
                className="cert-thumbnail no-border-radius"
                width={300}
                placeholder="blurred"
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
                    alt="Microsoft C# Certification"
                    className="cert-modal-image"
                    width={900}
                    placeholder="blurred"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications 