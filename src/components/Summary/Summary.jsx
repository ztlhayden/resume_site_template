import React from 'react'

import Objective from './atoms/Objective'
import Skills from './atoms/Skills'

const Summary = () => {
  return (
    <div className="summary_wrapper">
      <Objective />
      <Skills />
    </div>
  )
}

export default Summary