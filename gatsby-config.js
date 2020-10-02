module.exports = {
  siteMetadata: {
    title: `Hayden Young's Resume`,
    description: `Freelance web designer from Lexington, Kentucky.`,
    author: `Hayden Young`,
  },
  resumeData: {
    name:`Hayden Young`,
    title:`Web Developer`,
    objective:`I aim to provide your orginization the amazing web presence it deserves.`,
    bio:`This is my biography since I'm too lazy to try to write a real one right now.`,
    email:`hayden@haydenyoung.me`,
    phone:`(859) 684-0445`,
    linkedin:`https://www.linkedin.com/in/hayden-young-atp/`,
    twitter:`https://twitter.com/haydenry`,
    github:`https://github.com/ztlhayden`,
    instagram:`https://www.instagram.com/aviatorextro/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `deadhead-design-personal-resume`,
        short_name: `resume`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/dd_icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
