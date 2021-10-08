const path = require(`path`)


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://analogica.in",
    titleTemplate: "Analogic Template",

    title: "Analogica",
    description: "Courses",
    author: "analogica",
    authorSite: "",
    image: "../images/AnalogicaIcon.png",
    twitterUsername: "@analogica"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/uni icon.svg",
      },
    },

    {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://analogicadb.herokuapp.com`,
      queryLimit: 1000, // Defaults to 100,
      collectionTypes: [],
      singleTypes: [`home`, `what-we-do`],
  
    },
  },
  {
    resolve: 'gatsby-plugin-mailchimp',
    options: {
        endpoint: `https://gmail.us5.list-manage.com/subscribe/post?u=6e9eb5ffb33508d78b9e788f4&amp;id=f03d6af813`, 
    },
},

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
