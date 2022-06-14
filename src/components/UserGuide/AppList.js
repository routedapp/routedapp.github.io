import React from "react";
import { Box, Text } from "theme-ui";

function App({
	title,
	isSelected })
{
	const style = isSelected
		? {
			fontWeight: "bold",
			color: "highlight",
			cursor: "default"
		}
		: null;

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
	apps,
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
			{apps.map((app) => (
				<App
					key={app}
					title={app}
					isSelected={app === selectedApp}
				/>
			))}
		</Box>
	);
}
