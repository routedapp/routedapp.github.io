import React from "react";
import { Flex, Grid } from "theme-ui";

export function Description({
	sx,
	children })
{
	return <Flex
		sx={{
			fontSize: "banner",
			flexDirection: "column",
			alignItems: ["center", "self-start"],
			gap: "md",
			...sx
		}}
	>
		{children}
	</Flex>;
}

export function Feature({
	sx,
	children })
{
	return (
		<Grid
			sx={{
				mx: "neg-lg",
				gap: [0, "lg"],
				gridAutoFlow: ["row", "column"],
				gridAutoColumns: "1fr",
				alignItems: "center",
				...sx
			}}
		>
			{children}
		</Grid>
	);
}
