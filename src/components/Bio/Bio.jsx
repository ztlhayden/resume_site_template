import React from 'react'

import BioPicture from './atoms/BioPicture'
import BioInfo from "./atoms/BioInfo"

const Bio = () => {
  return (
    <div className="bio_wrapper">
      <BioPicture />
      <BioInfo />
    </div>
  )
}

export default Bio