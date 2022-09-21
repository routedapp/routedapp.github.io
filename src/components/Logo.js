import React from "react";
import { Image } from "theme-ui";
import logoImage from "@/images/logomark.svg";

export default function Logo({
	style })
{
	return (
		<Image
			src={logoImage}
			alt="Routed logo"
			style={{
				...style,
				height: "1.5rem"
			}}
		/>
	);
}
