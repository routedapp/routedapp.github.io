import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Text } from "theme-ui";

const query = graphql`
	{
		allContentfulBodyText {
			nodes {
				name
				text {
					raw
				}
			}
		}
	}
`;

export default function BodyText({ name })
{
	const { allContentfulBodyText: { nodes } } = useStaticQuery(query);
	// because Gatsby static queries can't take variables, we have to get all of
	// the bodyText nodes and then find the one with the name we're looking for
	const [node] = nodes.filter(({ name: nodeName }) => nodeName === name);

	if (!node) {
		return null;
	}

	return (
		<Text>
			{renderRichText(node.text)}
		</Text>
	);
}
