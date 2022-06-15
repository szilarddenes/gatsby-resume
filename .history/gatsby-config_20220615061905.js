module.exports = {
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./resume`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          // include: `${__dirname}/src/img`,
          include: /svg/
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#`,
        theme_color: `#663399`,
        icon: `src/img/svg/sdicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-remark-normalize-paths',
      options: {
        pathFields: ['image', 'cover'],
      },
    },
  ],
}
