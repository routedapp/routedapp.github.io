/** @jsxImportSource theme-ui */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Flex, Image } from "theme-ui";

function TeamMember({
	name,
	role,
	picture })
{
	return (
		<figure
			sx={{
				fontSize: "body",
				textAlign: "center",
				width: 260,
				m: 0
			}}
		>
			<Image
				src={picture}
				sx={{
					width: "100%",
					mb: "sm"
				}}
			/>
			<figcaption>
				<Box sx={{ fontWeight: "bold" }}>
					{name}
				</Box>
				<Box>
					{role}
				</Box>
			</figcaption>
		</figure>
	);
}

export default function TeamList()
{
	const {
		allContentfulTeamMember: { nodes }
	} = useStaticQuery(graphql`
		{
			allContentfulTeamMember(sort: { fields: fullName, order: ASC }) {
				nodes {
					fullName
					role
					imageUrl
				}
			}
		}
	`);

	return (
		<Flex
			sx={{
				mb: "xl",
				flexWrap: "wrap",
				columnGap: "lg",
				rowGap: "md",
				justifyContent: "center",
			}}
		>
			{nodes.map(({ fullName, role, imageUrl }) => (
				<TeamMember
					key={fullName}
					name={fullName}
					role={role}
					picture={imageUrl}
				/>
			))}
		</Flex>
	);
}
