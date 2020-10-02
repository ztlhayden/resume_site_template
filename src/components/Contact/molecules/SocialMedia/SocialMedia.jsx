import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import codepenicon from "../../../../assets/images/icons/codepen.svg"
import githubicon from "../../../../assets/images/icons/github.svg"
import instagramicon from "../../../../assets/images/icons/instagram.svg"
import linkedinicon from "../../../../assets/images/icons/linkedin.svg"

const SocialMedia = () => {
  const data = useStaticQuery(graphql`
    {
      resumeDataJson {
        social {
          codepen {
            platform
            link
          }
          github {
            platform
            link
          }
          instagram {
            platform
            link
          }
          linkedin {
            platform
            link
          }
        }
      }
    }
  `)

  const social = data.resumeDataJson.social

  return (
    <div className="social_media_container">

      <div className="social_icon codepen">
        <a href={social.codepen.link}>
          <img src={codepenicon} alt={social.codepen.platform}/>
        </a>
      </div>

      <div className="social_icon github">
        <a href={social.github.link}>
          <img src={githubicon} alt={social.github.platform}/>
        </a>
      </div>

      <div className="social_icon linkedin">
        <a href={social.linkedin.link}>
          <img src={linkedinicon} alt={social.linkedin.platform}/>
        </a>
      </div>

      <div className="social_icon instagrm">
        <a href={social.instagram.link}>
          <img src={instagramicon} alt={social.instagram.platform}/>
        </a>
      </div>

    </div>
  )

}

export default SocialMedia