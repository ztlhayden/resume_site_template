import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import SocialMedia from './molecules/SocialMedia/SocialMedia'

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      resumeDataJson {
        email
        phone
      }
    }
  `)

  return (
    <div className="contact_wrapper"> 
      <div className="contact_info">
        <ul>
          <li><a href="mailto:{data.resumeDataJson.email}">{data.site.resumeData.email}</a></li>
          <li><a href="tel:+1 {data.resumeDataJson.phone}">{data.site.resumeData.phone}</a></li>
        </ul>
      </div>
      <div className="social_containter">
        <SocialMedia />
      </div>
    </div>
  )
}

export default Contact