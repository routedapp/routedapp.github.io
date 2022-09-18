import React from "react";
import { Box } from "theme-ui";

export default function HeaderImage({
	src,
	height = 320 })
{
	return (
		<Box
			sx={{
				height,
				backgroundImage: `url(${src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				mb: "lg"
			}}
		/>
	);
}
