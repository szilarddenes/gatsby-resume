module.exports = {
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./resume`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
          plugins: [
              // without options
              "gatsby-remark-normalize-paths"
              // or
              // with options
              {
                  resolve: "gatsby-remark-normalize-paths",
                  options: {
                      pathFields: ["image", "cover"],
                  },
              },
          ],
      },
  },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    ``
  ],
}
