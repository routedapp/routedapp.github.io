import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	BaseStyles,
	Container,
	css,
	Heading,
	Text,
	useThemeUI
} from "theme-ui";
import { BLOCKS } from "@contentful/rich-text-types";

	// including __typename on the ContentfulAsset is critical, for some reason
const query = graphql`
	{
		allContentfulList(filter: {name: {eq: "userGuideEMS"}}) {
			nodes {
				name
				type
				items {
					... on ContentfulUserGuide {
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
		fontSize: 5,
		fontWeight: "bold"
	}
};

function UserGuide({
	title,
	app,
	body })
{
	const { theme } = useThemeUI();

	return (
		<Container
			css={css(guideStyles)(theme)}
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
	const { allContentfulList: { nodes: [{ items }] } } = useStaticQuery(query);

	return (
		<BaseStyles
			sx={{ mt: 5 }}
		>
			{items.map(({ title, app, body }, i) => {
				return (
					<UserGuide
						key={i}
						title={title}
						app={app}
						body={renderRichText(body, options)}
					/>
				);
			})}
		</BaseStyles>
	);
}
