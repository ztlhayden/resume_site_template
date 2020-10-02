import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SocialIcon from "./atoms/SocialIcon"

import "../../../../assets/images/icons"

const SocialMedia = () => {
  const data = useStaticQuery(graphql`
    {
      resumeDataJson {
        social {
          codepen {
            platform
            icon
            link
          }
          github {
            platform
            icon
            link
          }
          instagram {
            platform
            icon
            link
          }
          linkedin {
            platform
            icon
            link
          }
        }
      }
    }
  `)

  const social = data.resumeDataJson.social

  return (
    <div className="social_media_container">
      <SocialIcon platform={social.codepen.platform} link={social.codepen.link} icon={social.codepen.icon} />
    </div>
  )

}

export default SocialMedia