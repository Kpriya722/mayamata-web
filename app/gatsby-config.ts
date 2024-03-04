import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Mayamata`,
    siteUrl: `https://www.mayamata.in`,
    author: "Krishnapriya",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icons": [ 
        { 
          src: "src/images/mayamata.png" 
        } 
      ]
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/data`
    },
  },
  {
    resolve: `gatsby-transformer-yaml`,
    options: {
      typeName: `sitedata`
    }
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-Z0KVWNPBGF"
      ],
      gtagConfig: {
        send_page_view: true,
      },
      pluginConfig: {
        head: false,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        delayOnRouteUpdate: 0,
      }
    },
  },]
};

export default config;
