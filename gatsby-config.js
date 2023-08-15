/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://www.evanwolf.tech/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/'
      }
    },
    {
    resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:300,400', 'Roboto Mono']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/favicon.png',
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          twitter: true,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Evan Szymkowicz',
        short_name: 'ews',
        start_url: '/',
        background_color: '#013220',
        theme_color: '#013220',
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components'
  ],
};