/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Tandlægeeftersyn",
    siteUrl: "https://tandlaegeeftersyn.dk",
    description: "Få et tandeftersyn i din kommune til en god pris",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-149019685-1",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
  ],
}
