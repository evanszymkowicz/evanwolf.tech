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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-113472346-1',
        anonymize: true,
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
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: '/favicons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components'
  ],
}
