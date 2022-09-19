import React from "react";
import { Box, Flex } from "theme-ui";

export function Description({ sx, children })
{
	return <Flex
		sx={{
			fontSize: "banner",
			flexDirection: "column",
			alignItems: "self-start",
			gap: "md",
			...sx
		}}
	>
		{children}
	</Flex>;
}

export function Feature({ children })
{
	return (
		<Box
			sx={{
				mx: "-lg",
				gap: "lg",
				display: "grid",
				gridAutoFlow: "column",
				gridAutoColumns: "1fr",
				alignItems: "center",
			}}
		>
			{children}
		</Box>
	);
}
