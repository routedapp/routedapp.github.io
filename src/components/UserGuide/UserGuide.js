import React from "react";
import { Box, Heading } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS } from "@contentful/rich-text-types";
import { BaseStyles } from "theme-ui";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const ScreenshotWidth = "275px";

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
					style={{ width: ScreenshotWidth }}
				/>
			);
		}
	}
};

const guideStyles = {
	ol: {
		paddingInlineStart: 0,
		counterReset: "step",
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: ["space-evenly", "normal"],
		columnGap: "md",
		rowGap: "lg",
	},
	li: {
		listStyleType: "none",
		marginBlockStart: 0,
		marginBlockEnd: 0,
		width: ScreenshotWidth,
		counterIncrement: "step",
		display: "flex",
		flexDirection: "column",
	},
	"li > .gatsby-image-wrapper": {
		boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.1)",
		border: "1px solid #eee",
		borderRadius: "lg",
		mx: "auto"
	},
	// put some top margin on all the paragraphs in the li, so we can use blank
	// paras as kludgy spacers
	"li > p": {
		marginBlockStart: 0,
		marginBlockEnd: 0,
		mt: "md",
		fontSize: "1.5rem",
	},
	"li > p:last-of-type::before": {
		fontSize: "body",
		fontWeight: "bold",
		content: "counter(step) '.'",
		mb: "xs",
		display: "block"
	},
	"li > p:last-of-type": {
		bg: "muted",
		p: "md",
		borderStyle: "solid",
		borderImageSlice: 1,
		borderWidth: "0 0 5px 0",
		borderImageSource: "linear-gradient(138.16deg, #425cc6 18.75%, #00adbb 61.85%, #99e6d8 94.61%)",
		flexGrow: 1,
	}
};

export default function UserGuide({
	title,
	body })
{
	return (
		<Box sx={{ mb: "lg" }}>
			<Heading
				sx={{
					fontSize: "banner",
					mb: ["lg", "md"]
				}}
			>
				{title}
			</Heading>
			<BaseStyles>
				<Box sx={guideStyles}>
					{renderRichText(body, options)}
				</Box>
			</BaseStyles>
		</Box>
	);
}
