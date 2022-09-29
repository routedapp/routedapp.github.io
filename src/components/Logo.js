import React from "react";
import { Image } from "theme-ui";
import logoImage from "@/images/logomark.svg";

export default function Logo({
	sx })
{
	return (
		<Image
			src={logoImage}
			alt="Routed logo"
			sx={{
				height: "1.5rem",
				verticalAlign: "middle",
				...sx,
			}}
		/>
	);
}
