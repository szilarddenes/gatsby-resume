import React, { useEffect, useRef } from 'react'
import '../styles/timeline.css'

const Timeline = ({ resume }) => {
  const timelineRef = useRef(null)
  
  const { work = [] } = resume || {}
  
  
  
  const workItems = work.map((job, index) => {
    const parseDateInfo = (dateStr) => {
      if (!dateStr || dateStr === null || dateStr === '') return { year: null, display: null }
      
      // Handle formatted dates from GraphQL (e.g., "Nov, 2024", "Apr, 2023")
      if (typeof dateStr === 'string' && dateStr.includes(',')) {
        const parts = dateStr.split(',')
        if (parts.length >= 2) {
          const year = parseInt(parts[1].trim())
          const month = parts[0].trim()
          if (!isNaN(year)) {
            return { year, display: `${month} ${year}` }
          }
        }
      }
      
      // Handle YYYY-MM format (direct from YAML, fallback)
      if (typeof dateStr === 'string' && dateStr.includes('-')) {
        const parts = dateStr.split('-')
        if (parts.length >= 2) {
          const year = parseInt(parts[0])
          const month = parseInt(parts[1])
          if (!isNaN(year) && !isNaN(month)) {
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            const monthName = monthNames[month - 1]
            return { year, display: `${monthName} ${year}` }
          }
        }
      }
      
      // Try direct year parsing
      const year = parseInt(dateStr)
      if (!isNaN(year)) {
        return { year, display: `${year}` }
      }
      
      return { year: null, display: null }
    }
    
    const startDateInfo = parseDateInfo(job.startDate)
    const endDateInfo = parseDateInfo(job.endDate)
    
    
    return {
      name: job.name,
      position: job.position,
      startDate: job.startDate,
      endDate: job.endDate,
      type: 'work',
      description: job.summary,
      order: index,
      startYear: startDateInfo.year,
      endYear: endDateInfo.year || 'Present',
      startDisplay: startDateInfo.display,
      endDisplay: endDateInfo.display || 'Present',
      sortDate: new Date(startDateInfo.year || new Date().getFullYear(), 0, 1)
    }
  }).sort((a, b) => b.sortDate - a.sortDate)

  const timelineItems = workItems

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    const handleScroll = () => {
      const items = timeline.querySelectorAll('.timeline-item')
      const scrollLeft = timeline.scrollLeft
      const maxScroll = timeline.scrollWidth - timeline.clientWidth
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0

      // Update progress bar
      const progressBar = document.querySelector('.progress-bar')
      if (progressBar) {
        progressBar.style.width = `${progress * 100}%`
      }

      items.forEach((item, index) => {
        const itemProgress = (scrollLeft + timeline.clientWidth * 0.5) / timeline.scrollWidth
        const itemPosition = (index + 1) / items.length
        
        if (itemProgress >= itemPosition - 0.15 && itemProgress <= itemPosition + 0.15) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    }

    const scrollLeft = () => {
      timeline.scrollBy({ left: -300, behavior: 'smooth' })
    }

    const scrollRight = () => {
      timeline.scrollBy({ left: 300, behavior: 'smooth' })
    }

    // Starting animation
    const startAnimation = () => {
      setTimeout(() => {
        timeline.scrollBy({ left: 200, behavior: 'smooth' })
        setTimeout(() => {
          timeline.scrollBy({ left: -200, behavior: 'smooth' })
        }, 1500)
      }, 1000)
    }

    const leftArrow = document.querySelector('.scroll-arrow.left')
    const rightArrow = document.querySelector('.scroll-arrow.right')

    leftArrow?.addEventListener('click', scrollLeft)
    rightArrow?.addEventListener('click', scrollRight)
    timeline.addEventListener('scroll', handleScroll)
    
    handleScroll()
    startAnimation()

    return () => {
      leftArrow?.removeEventListener('click', scrollLeft)
      rightArrow?.removeEventListener('click', scrollRight)
      timeline.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToJob = (jobName) => {
    const jobElement = document.querySelector(`[data-job="${jobName}"]`)
    if (jobElement) {
      jobElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="timeline-container">
      <h2>Experience</h2>
      
      <div className="timeline-section">
        <button className="scroll-arrow left" title="Previous">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="timeline-wrapper" ref={timelineRef}>
        <div className="timeline-track">
          {timelineItems.map((item, index) => (
            <div 
              key={`work-${index}`}
              className={`timeline-item ${index % 2 === 0 ? 'top' : 'bottom'}`}
              onClick={() => scrollToJob(item.name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  scrollToJob(item.name)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${item.name} - ${item.position} (${item.startDisplay} - ${item.endDisplay})`}
            >
              <div className="timeline-content">
                <div className="timeline-title">{item.name}</div>
                <div className="timeline-subtitle">{item.position}</div>
                {(item.startDisplay || item.endDisplay) && (
                  <div className="timeline-years">
                    {item.startDisplay ? item.startDisplay : ''}{item.startDisplay && ' - '}{item.endDisplay || ''}
                  </div>
                )}
              </div>
              <div className="timeline-connector"></div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
        </div>
        
        <button className="scroll-arrow right" title="Next">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="timeline-progress">
        <div className="progress-bar"></div>
      </div>
    </div>
  )
}

export default Timeline