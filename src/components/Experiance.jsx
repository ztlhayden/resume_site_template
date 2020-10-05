import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Experience = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              school
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

  const experience = data.allMarkdownRemark.edges
  
  return (
    <div className="experience_wrapper">

      <div className="exp_wrapper">
        <h2>Work Experience</h2>
        <div className="item_wrapper">
          {
            experience.map(i => {
              const exp = i.node
              if (exp.frontmatter.school === false ) {
                return <div className="item_container" key={exp.id}>
                        <div className="frontmatter">
                          <h3>{exp.frontmatter.title}, {exp.frontmatter.employer}</h3>
                          <span className="location">{exp.frontmatter.location}</span>
                          <span className="dates">{exp.frontmatter.start_date} - {exp.frontmatter.end_date}</span>
                        </div>
                        <div className="duties" dangerouslySetInnerHTML={{__html: exp.html}}/>
                      </div>
              }
              return null
            })
          }
        </div>
      </div>

      <div className="exp_wrapper">
      <h2>Education</h2>
      <div className="item_wrapper">
        {
          experience.map(i => {
            const exp = i.node
            if (exp.frontmatter.school === true ) {
              return <div className="item_container" key={exp.id}>
                      <div className="frontmatter">
                        <h3>{exp.frontmatter.employer}</h3>
                        <span className="title">{exp.frontmatter.title}</span>
                        <span className="location">{exp.frontmatter.location}</span>
                        <span className="dates">{exp.frontmatter.start_date} - {exp.frontmatter.end_date}</span>
                      </div>
                      <div className="duties" dangerouslySetInnerHTML={{__html: exp.html}}/>
                    </div>
            }
            return null
          })
        }
      </div>
    </div>

  </div>
  )
}

export default Experience