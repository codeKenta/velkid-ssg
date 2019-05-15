// require("dotenv").config()

// module.export = {
//   plugins: [
//     {
//       resolve: `gatsby-source-datocms`,
//       options: {
//         // You can find your read-only API token under the Settings > API tokens
//         // section of your administrative area:
//         apiToken: process.env.DATO_CMS_TOKEN,

//         // If you are working on development/staging environment, you might want to
//         // preview the latest version of records instead of the published one:
//         previewMode: false,

//         // Disable automatic reloading of content when some change occurs on DatoCMS:
//         disableLiveReload: false,

//         // Custom API base URL
//         apiUrl: "https://site-api.datocms.com",
//       },
//     },
//   ],
// }

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Velkit SSG",
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_TOKEN,
        previewMode: false,
        apiUrl: `https://site-api.datocms.com`,
      },
    },
  ],
}
