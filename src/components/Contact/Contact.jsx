import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import SocialMedia from './atoms/SocialMedia'

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      site(resumeData: {}) {
        resumeData {
          email
          github
          instagram
          linkedin
          phone
          twitter
        }
      }
    }
  `)

  return (
    <div className="contact_wrapper"> 
      <div className="contact_info">
        <ul>
          <li><a href="mailto:{data.site.resumeData.email}">{data.site.resumeData.email}</a></li>
          <li><a href="tel:+1 {data.site.resumeData.phone}">{data.site.resumeData.phone}</a></li>
        </ul>
      </div>
      <div className="social_containter">
        <SocialMedia platform="github" link={data.site.resumeData.github} />
      </div>
    </div>
  )
}

export default Contact