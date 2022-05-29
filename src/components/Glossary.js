/** @jsxImportSource theme-ui */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Heading } from "theme-ui";

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
		<ul
			{...props}
			sx={{
				margin: 0,
				padding: 0,
				"& li": {
					listStyle: "none",
					mb: 3
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
				<li key={i}>
					<Heading variant="name">{word}</Heading>
					<Heading variant="subheading">{definition}</Heading>
				</li>
			))}
		</List>
	);
}
