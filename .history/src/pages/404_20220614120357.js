import React from 'react'
const Page = ({ data }) => {
    const resume = data.resumeYaml
    return <Resume resume={resume} />
  }
export default Page