import React from "react";
import { Box, Text } from "theme-ui";

function App({
	title,
	selectedApp })
{
	const style = title === selectedApp
		? {
			fontWeight: "bold",
			color: "highlight",
			cursor: "default"
		}
		: {};

	return (
		<Box>
			<Text
				sx={{
					fontSize: "body",
					"&:hover": {
						color: "highlight",
						cursor: "pointer"
					},
					...style
				}}
			>
				{title}
			</Text>
		</Box>
	)
}

export default function AppList({
	selectedApp,
	onClick })
{
	return (
		<Box
			sx={{
				my: 5
			}}
			onClick={onClick}
		>
			<App
				title="EMS"
				selectedApp={selectedApp}
			/>
			<App
				title="Hospital"
				selectedApp={selectedApp}
			/>
		</Box>
	);
}
