import React from "react"

import '../style/index.scss'
import SEO from "../components/seo"

import Bio from '../components/Bio/Bio'
import Contact from "../components/Contact/Contact"
import Summary from "../components/Summary/Summary"
import Experience from "../components/Experiance"
import Footer from "../components/Footer"

const IndexPage = () => (
  <div className="content_wrapper">
    <SEO title="Resume"/>
    
    <header>
      <Bio />
      <Contact />
    </header>

    <main>
      <section>
        <Summary />
      </section>

      <section>
        <Experience />
      </section>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
)

export default IndexPage
