import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const BioPicture = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "biopicture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div className="bio_picture_failed">Picture not found</div>
  }

  return <Img className="bio_picture" fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default BioPicture