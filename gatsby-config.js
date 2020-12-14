module.exports = {
  siteMetadata: {
    title: 'Jupyter Presentation Framework',
    author: 'jolfr',
    description: 'A Jupyter notebook website built on gatsby.js. Thanks to Hunter Chang and HTML5 UP for the original design',
    keywords: [
      'jupyter',
      'gatsby.js',
      'data science',
      'data presentation'
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jupyter-presentation-framework',
        short_name: 'jpy-present',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notebooks`,
        path: `${__dirname}/src/notebooks`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: 'gatsby-remark-table-formatter',
            options: {}
          }
        ],
      },
    },
  ],
}
