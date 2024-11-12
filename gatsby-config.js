const path = require('path');
const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules'
);

module.exports = {
    siteMetadata: {
        title: `new`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require(`tailwindcss`), //workig
                    require(`postcss-functions`), // ?
                    require(`postcss-import`), // ?
                    require(`postcss-mixins`), // ?
                    // require(`postcss-advanced-variables`), // is not working properly
                    require('postcss-simple-vars'),
                    require(`postcss-nested`), //working
                    require(`autoprefixer`), // ?
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                rulePaths: [gatsbyRequiredRules],
                stages: ['develop'],
                extensions: ['js', 'jsx'],
                exclude: [
                    'node_modules',
                    'bower_components',
                    '.cache',
                    'public',
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'React go',
                short_name: 'Reactgo',
                start_url: '/',
                background_color: '#f7f0eb',
                theme_color: '#a2466c',
                display: 'standalone',
                icon: 'src/images/site-marvel-logo.png',
            },
        },
    ],
};
