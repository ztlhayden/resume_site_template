import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const BioInfo = () => {
  const json = useStaticQuery(graphql`
    {
      resumeDataJson {
        name
        title
        bio
      }
    }
  `)
  const data = json.resumeDataJson

  return (
    <div className="bio_info">
      <h1 className="bio_name">{data.name}</h1>
      <span className="bio_title">{data.title}</span>
      <p className="bio_objective">{data.bio}</p>
    </div>
  )
}

export default BioInfo