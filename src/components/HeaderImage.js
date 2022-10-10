import React from "react";
import { Box } from "theme-ui";

export default function HeaderImage({
	src,
	height = ["12rem", "26rem"],
	sx,
	children })
{
	return (
		<Box
			sx={{
				height,
				backgroundImage: `url(${src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				mb: "lg",
				position: "relative",
				...sx
			}}
		>
			{children}
		</Box>
	);
}
