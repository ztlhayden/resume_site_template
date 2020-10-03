import React from "react"

import '../style/index.scss'

import Bio from '../components/Bio/Bio'
import Contact from "../components/Contact/Contact"
import WorkExp from "../components/WorkExp/WorkExp"

const IndexPage = () => (
  <div className="content_wrapper">
    
    <Bio />
    
    <Contact />
    
    <div className="objective"></div>

    <WorkExp />






    <div className="education_wrapper">
      <div className="education_item"></div>
    </div>

    <div className="skills_wrapper">
      <div className="skills_list">
        <div className="skills_items"></div>
      </div>
    </div>


  </div>
)

export default IndexPage
