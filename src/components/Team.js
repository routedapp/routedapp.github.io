/** @jsxImportSource theme-ui */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Image } from "theme-ui";

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
		<Box
			sx={{
				mb: "xl",
				display: "flex",
				flexWrap: "wrap",
				gap: "lg"
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
		</Box>
	);
}
