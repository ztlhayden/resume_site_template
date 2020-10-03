import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const WorkExp = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              end_date
              employer
              title
              start_date
              location
            }
          }
        }
      }
    }
  `)

  const experiance = data.allMarkdownRemark.edges
  
  return (
    <div className="work_wrapper">

      <h2>Work Experiance</h2>

      <div className="work_item_wrapper">
        {
          experiance.map(i => {
            const job = i.node
            return <div className="work_item_container card" key={job.id}>
                    <h3>{job.frontmatter.employer}</h3>
                    <span className="title">{job.frontmatter.title}</span>
                    <span className="location">{job.frontmatter.location}</span>
                    <span className="dates">{job.frontmatter.start_date} - {job.frontmatter.end_date}</span>
                    <div className="duties" dangerouslySetInnerHTML={{__html: job.html}}/>
                  </div>
          })
        }
      </div>
    </div>
  )
}

export default WorkExp