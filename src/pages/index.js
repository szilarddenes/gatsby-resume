import React from 'react'
import { graphql } from 'gatsby'

import Resume from '../components/resume'

const Page = ({ data }) => {
  const resume = data.resumeYaml
  return <Resume resume={resume} />
}

export default Page

export const query = graphql`
  query {
    resumeYaml {
      basics {
        email
        name
        label
        phone
        url
        summary
        location {
          address
          postalCode
          city
          countryCode
          region
        }
        profiles {
          network
          username
          url
        }
      }
      work {
        description
        endDate(formatString: "MMM, YYYY")
        highlights
        location
        name
        startDate(formatString: "MMM, YYYY")
        position
        summary
        url
      }
      volunteer {
        endDate(formatString: "MMM, YYYY")
        highlights
        organization
        position
        startDate(formatString: "MMM, YYYY")
        summary
        url
      }
      education {
        area
        courses
        endDate(formatString: "MMM, YYYY")
        gpa
        thesis
        institution
        startDate(formatString: "MMM, YYYY")
        studyType
      }
      trainings{
        title
        location
        heldBy
        summary
        startDate(formatString: "DD,MMM, YYYY")
        endDate(formatString: "DD, MMM, YYYY")
      }
      awards {
        awarder
        date(formatString: "MMM, YYYY")
        summary
        title
      }
      publications {
        name
        publisher
        releaseDate(formatString: "MMM, YYYY")
        summary
        url
      }
      skillsMain {
        keywords
        level
        name
      }
      skills {
        keywords
        level
        name
      }
      languages {
        fluency
        language
      }
      interests {
        keywords
        name
      }
      references {
        name
        reference
        link
      }
      projects {
        name
        description
        highlights
        
      }
      certifications {
        title
        date(formatString: "MMMM DD, YYYY")
        issuer
        platform
        url
        image
      }
    }
  
  }
`
