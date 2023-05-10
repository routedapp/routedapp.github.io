/** @jsxImportSource theme-ui */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Flex } from "theme-ui";

function TeamMember({
	name,
	role,
	picture })
{
	return (
		<figure
			sx={{
				fontSize: [4, "body"],
				textAlign: "center",
				width: ["15rem", "18rem", "19rem"],
				m: 0
			}}
		>
			<Box
				role="img"
				aria-label={`Photo of ${name}`}
				sx={{
					width: "100%",
					height: 0,
					pb: "100%",
					mb: "sm",
					backgroundImage: `url(${picture})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					filter: "grayscale(1)"
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
			allContentfulTeamMember(sort: {fullName: ASC}) {
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
				columnGap: ["md", "md", "lg"],
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
