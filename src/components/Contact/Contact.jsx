import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import SocialMedia from './molecules/SocialMedia/SocialMedia'

const Contact = () => {
  const json = useStaticQuery(graphql`
    {
      resumeDataJson {
        email
        phone
      }
    }
  `)
  const data = json.resumeDataJson

  return (
    <div className="contact_wrapper"> 

      <h2>Contact</h2>

      <div className="contact_info">
        <ul>
          <li><a href={`mailto: ${data.email}`}>{data.email}</a></li>
          <li><a href={`tel:+1 ${data.phone}`}>{data.phone}</a></li>
        </ul>
        
        <SocialMedia />
      </div>
    </div>
  )
}

export default Contact