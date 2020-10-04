import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Objective = () => {
  const data = useStaticQuery(graphql`
    {
      resumeDataJson {
        objective
      }
    }
  `)
  return (
    <div className="objective_container">
      <h2 className="objective">Objective</h2>
      <p>{data.resumeDataJson.objective}</p>
    </div>
  )
}

export default Objective