import React from "react";
import { Grid } from "theme-ui";

export default function BlockRow({
	sx,
	children })
{
	return (
		<Grid
			sx={{
				gridAutoFlow: ["row", "column"],
				gridAutoColumns: "1fr",
				alignItems: "center",
				gap: "lg",
				mb: "xl",
				...sx
			}}
		>
			{children}
		</Grid>
	);
}
