require("dotenv").config();

module.exports = {
  pathPrefix: `${process.env.PATH_PREFIX}`,
  siteMetadata: {
    title: "Jesse tries Gatsby",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
