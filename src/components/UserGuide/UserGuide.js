import React from "react";
import { Box, css, Heading, Text, useThemeUI } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS } from "@contentful/rich-text-types";
import { BaseStyles } from "theme-ui";
import { renderRichText } from "gatsby-source-contentful/rich-text";

	// create an options param for renderRichText() to specify how to render
	// embedded images
const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			const { gatsbyImageData, description = "screenshot" } = node.data.target;

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
	ol: {
		display: "flex",
		flexFlow: "row wrap",
		paddingInlineStart: "2rem"
	},
	li: {
		flex: 1,
		mr: "sm"
	},
	"li::marker": {
		fontSize: "body",
		fontWeight: "bold"
	},
	p: {
		fontSize: "1.125rem",
	}
};

export default function UserGuide({
	title,
	body })
{
	const { theme } = useThemeUI();

	return (
		<Box sx={{ mb: "lg" }}>
			<Heading
				sx={{
					fontSize: "banner",
					mb: "md"
				}}
			>
				{title}
			</Heading>
			<BaseStyles
				css={css(guideStyles)(theme)}
			>
				<Text>
					{renderRichText(body, options)}
				</Text>
			</BaseStyles>
		</Box>
	);
}
