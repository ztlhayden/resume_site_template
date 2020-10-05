import React from 'react'

import Contact from './Contact/Contact'

const Footer = () => {

  return (
    <div className="footer_wrapper">
      <Contact />
      <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>Back</button>
    </div>
  )
}

export default Footer