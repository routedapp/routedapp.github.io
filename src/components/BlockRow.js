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
					// when the children are stacked on top of each other, limit their
					// max-width to 400px so they're not huge after the layout change
				gridAutoColumns: ["fit-content(40rem)", "1fr"],
				justifyContent: "space-evenly",
				gap: "lg",
				mb: "xl",
				...sx
			}}
		>
			{children}
		</Grid>
	);
}
