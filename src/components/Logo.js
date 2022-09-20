import React from "react";
import LogoImage from "@/images/logomark.svg";

export default function Logo({
	style })
{
	return (
		<LogoImage
			alt="Routed logo"
			style={{
				...style,
				height: "1.5rem"
			}}
		/>
	);
}
