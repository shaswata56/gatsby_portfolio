require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Shaswata Das - Portfolio`,
    siteTitleAlt: `Shaswata Das - Portfolio`,
    siteHeadline: `Shaswata Das - Portfolio`,
    siteUrl: `https://shaswata56.github.io`,
    siteDescription: `Portfolio of Shaswata Das. Software Enginner, Developer, Hacker. From Shahjalal University of Science and Technology, Sylhet, Bangladesh. SUST`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `@shaswata56`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-154486274-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shaswata Das - Portfolio`,
        short_name: `Shaswata Das`,
        description: `Portfolio of Shaswata Das. Software Enginner, Developer, Hacker. From Shahjalal University of Science and Technology, Sylhet, Bangladesh. SUST`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon.ico`,
            sizes: `16x16`,
            type: `image/gif`,
          },
          {
            src: `/favicon.ico`,
            sizes: `16x16`,
            type: `image/gif`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
