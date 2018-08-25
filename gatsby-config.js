
let contentfulConfig = {
  spaceId: "i259dmwsx79b",
  accessToken: "f1e45e95d2b62b70a76ae7d56948a48f2db55c9c193ab110c69c39b72685e7c0"
}

module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
