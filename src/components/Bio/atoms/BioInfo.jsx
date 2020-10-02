import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const BioInfo = () => {
  const data = useStaticQuery(graphql`
  {
    site {
      resumeData {
        name
        title
        bio
      }
    }
  }
`)
  return (
    <div className="bio_info">
      <h1 className="bio_name">{data.site.resumeData.name}</h1>
      <span className="bio_title">{data.site.resumeData.title}</span>
      <p className="bio_objective">{data.site.resumeData.bio}</p>
    </div>
  )
}

export default BioInfo