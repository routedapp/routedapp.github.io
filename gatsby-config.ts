import path from "path";
import * as dotenv from "dotenv";

dotenv.config();

export default {
	siteMetadata: {
		title: "RoutED",
		titleTemplate: "RoutED · %s",
		description: "Directing patients to the most available care."
	},
	pathPrefix: "",
	plugins: [
		"gatsby-plugin-theme-ui",
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
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
			},
		},
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				extensions: [".md", ".mdx"],
				defaultLayouts: {
					default: path.resolve("./src/components/Layout.js")
				}
			}
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
	]
};
