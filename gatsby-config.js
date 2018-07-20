module.exports = {
  siteMetadata: {
    title: 'Linky',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {},
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
