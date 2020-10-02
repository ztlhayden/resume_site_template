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
      <div className="contact_info">
        <h2>Contact</h2>
        <ul>
          <li><a href={`mailto: ${data.email}`}>{data.email}</a></li>
          <li><a href={`tel:+1 ${data.phone}`}>{data.phone}</a></li>
        </ul>
      </div>
      <div className="social_containter">
        <SocialMedia />
      </div>
    </div>
  )
}

export default Contact