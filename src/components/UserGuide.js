import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BaseStyles, Container, css, Heading, Text } from "theme-ui";
import { BLOCKS } from "@contentful/rich-text-types";

const query = graphql`
	{
		allContentfulUserGuide {
			nodes {
				title
				app
				body {
					raw
					references {
						... on ContentfulAsset {
							contentful_id
							__typename
							gatsbyImageData
						}
					}
				}
			}
		}
	}
`;

	// create an options param for renderRichText() to specify how to render
	// embedded images
const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			const { gatsbyImageData, description } = node.data.target;

			return (
				<GatsbyImage
					image={getImage(gatsbyImageData)}
					alt={description}
					style={{ width: "507px" }}
				/>
			);
		}
	}
};

const guideStyles = {
	h2: {
		fontSize: 5
	},
	ol: {
		fontSize: 3,
		display: "flex",
		flexFlow: "row wrap",
		paddingInlineStart: "2rem"
	},
	li: {
		flex: 1,
		mr: 5
	},
	"li::marker": {
			// for some reason, using 5 here as the fontSize produces 32px text and 4
			// gives 24px, so it seems to be picking from some size list other than
			// what's in the theme.  so use an explicit rem size to match the <p> text.
		fontSize: "1.75rem",
		fontWeight: "bold"
	}
};

function UserGuide({
	title,
	app,
	body })
{
	return (
		<Container
			css={css(guideStyles)}
		>
			<Heading>
				{title}
			</Heading>
			<Text>
				{body}
			</Text>
		</Container>
	);
}

export default function UserGuideList()
{
	const { allContentfulUserGuide: { nodes } } = useStaticQuery(query);

	return (
		<BaseStyles
			sx={{ mt: 5 }}
		>
			{nodes.map(({ title, app, body }, i) => (
				<UserGuide
					key={i}
					title={title}
					app={app}
					body={renderRichText(body, options)}
				/>
			))}
		</BaseStyles>
	);
}
