import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './header'
import Summary from './summary'
import Contact from './contact'
import About from './about'
import Project from './projects'
import Profiles from './profiles'
import Work from './work'
import Education from './education'
import Trainings from './trainings'
import Awards from './awards'
import Publications from './publications'
import Skills from './skills'
import SkillsMain from './skillsMain'
import Languages from './languages'
import Interests from './interests'
import References from './references'
import ProfileImage from './profileimage'
import Certifications from './certifications'
import '../styles/certifications.css'

import TitleSvg from '../img/svg/sdicon.svg'

const Resume = ({ resume }) => {
  console.log('Full resume data:', resume); // Debug full data
  const {
    basics,
    projects,
    work,
    volunteer,
    education,
    awards,
    trainings,
    publications,
    skills,
    skillsMain,
    languages,
    interests,
    references,
    workedWith,
    certifications
  } = resume || {};

  console.log('Certifications:', certifications); // Debug certifications

  return (
    <React.Fragment>
      <Helmet>
        <title>{basics.name}</title>
        <meta name='description' content={`resume for ${basics.name}`} />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css'
        />
      </Helmet>

      <Header basics={basics} />
      {/* <TitleSvg /> */}
      <div id='content' className='container'>
        {/* <h2>📌  my coding journey</h2> */}
        {/* <Summary /> */}
        <Contact basics={basics} />
        <About basics={basics} />
        <Profiles profiles={basics.profiles || []} />
        {/* <Project projects={projects} /> */}
        <SkillsMain skillsMain={skillsMain} />
        <Skills skills={skills} />
        {certifications && certifications.length > 0 && (
          <Certifications certifications={certifications} />
        )}
        {/* <h2>📌  ...and I am also a geological engineer</h2> */}
        <Work works={work} />
        <Education educations={education} />
        <Trainings trainings={trainings} />
        <Awards awards={awards} />
        <Languages languages={languages} />
        <Interests interests={interests} />
        <References references={references} />
      </div>
    </React.Fragment>
  )
}

export default Resume
