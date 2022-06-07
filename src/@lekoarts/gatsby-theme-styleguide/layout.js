import React from "react";
import { Box } from "theme-ui";

export default function Layout(
	props)
{
	return (
		<Box
			{...props}
			sx={{
				p: "0 5rem",
				m: "5rem auto",
				maxWidth: "1024px",
				section: {
					my: "5rem"
				}
			}}
		/>
	);
}
