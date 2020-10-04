import React from "react"

import '../style/index.scss'
import SEO from "../components/seo"

import Bio from '../components/Bio/Bio'
import Contact from "../components/Contact/Contact"
import Summary from "../components/Summary/Summary"
import WorkExp from "../components/WorkExp"

const IndexPage = () => (
  <div className="content_wrapper">
    <SEO title="Resume"/>

    <Bio />
    <Contact />
    <Summary />
    <WorkExp />
  </div>
)

export default IndexPage
