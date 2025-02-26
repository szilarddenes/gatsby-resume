module.exports = {
  pathPrefix: "/gatsby-resume",
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
  },
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
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `png`, `jpg`],
          placeholder: `none`,
          backgroundColor: `#12141a`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
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
        background_color: `#fcc419`,
        theme_color: `#fcc419`,
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
