/** @jsxImportSource theme-ui */
import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
	{
		allContentfulList(filter: {name: {eq: "glossary"}}) {
			nodes {
				name
				type
				items {
					... on ContentfulGlossaryDefinition {
						word
						definition
					}
				}
			}
		}
	}
`;

function List(
	props)
{
	return (
		<dl
			{...props}
			sx={{
				margin: 0,
				padding: 0,
				fontSize: "body",
				"& dt": {
					fontWeight: "bold"
				},
				"& dd": {
					marginInlineStart: 5,
					mb: 5
				}
			}}
		/>
	)
}

export default function Glossary()
{
	const { allContentfulList: { nodes: [{ items }] } } = useStaticQuery(query);

	return (
		<List>
			{items.map(({ word, definition }, i) => (
				<Fragment key={i}>
					<dt>{word}</dt>
					<dd>{definition}</dd>
				</Fragment>
			))}
		</List>
	);
}
