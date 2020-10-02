import React from 'react'

const SocialIcon = ( props ) => {

  return (
    <div className="social_icon">
      <a href={props.link}>
        <img src={props.icon} alt={props.platform}/>
      </a>
    </div>
  )
}

export default SocialIcon