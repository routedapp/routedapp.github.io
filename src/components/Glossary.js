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
				m: 0,
				mb: "xl",
				p: 0,
				fontSize: "body",
				"& dt": {
					fontWeight: "bold"
				},
				"& dd": {
					marginInlineStart: 0,
					mb: "m"
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
