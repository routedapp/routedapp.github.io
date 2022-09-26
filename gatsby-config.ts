import * as dotenv from "dotenv";

dotenv.config();

const description = "Directing patients to the most available care.";

export default {
	siteMetadata: {
		title: "Routed",
		titleTemplate: `%s · Routed · ${description}`,
		description,
		siteUrl: "https://routedapp.org",
		image: "/routed-logomark.png",
	},
	pathPrefix: "",
	plugins: [
		"gatsby-plugin-theme-ui",
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-transformer-sharp",
		{
			resolve: "@lekoarts/gatsby-theme-styleguide",
			options: {
				basePath: "/style-guide"
			},
		},
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				host: process.env.CONTENTFUL_HOST || "cdn.contentful.com"
			},
		},
		{
			resolve: "gatsby-plugin-alias-imports",
			options: {
				alias: {
					"@": "src"
				}
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "pages",
				"path": "./src/pages/"
			},
			__key: "pages"
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
						// SVG files ending in .inline.svg will be imported and inlined as
						// components.  the rest can be used as image sources.
					include: /.+\.inline\.svg$/
				}
			}
		},
	]
};
