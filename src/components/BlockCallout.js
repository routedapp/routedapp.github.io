import React from "react";
import { Box, Flex, Image } from "theme-ui";

export default function BlockCallout({
	icon,
	children })
{
	return (
		<Flex
			sx={{
				bg: "muted",
				px: "lg",
				pb: "100%",
				width: "100%",
				height: 0,
				textAlign: "center",
				flexDirection: "column",
				alignItems: "center",
				display: "inline-block",
				overflow: "hidden"
			}}
		>
			<Box
				sx={{
					py: "md"
				}}
			>
				<Image
					src={icon}
					alt=""
					sx={{
						width: "37.5%",
						maxWidth: 150,
						maxHeight: 150
					}}
				/>
			</Box>
			{children}
		</Flex>
	);
}
