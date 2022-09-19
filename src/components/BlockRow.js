import React from "react";
import { Grid } from "theme-ui";

export default function BlockRow({
	sx,
	children })
{
	return (
		<Grid
			sx={{
				gridAutoFlow: "column",
				gridAutoColumns: "1fr",
				gap: "lg",
				mb: "xl",
				...sx
			}}
		>
			{children}
		</Grid>
	);
}
