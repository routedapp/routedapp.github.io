import React from "react";
import { Button, Flex } from "theme-ui";

const selected = {
	bg: "secondary",
	":hover": {
		cursor: "default",
		bg: "secondary"
	},
	":active": {
		bg: "secondary"
	},
};
const unselected = {
	color: "primary",
	bg: "unset",
	":hover": {
		bg: "secondary50"
	},
	":active": {
		bg: "secondary70"
	},
};

function App({
	title,
	isSelected })
{
	return (
		<Button
			sx={isSelected ? selected : unselected }
		>
				{title}
		</Button>
	)
}

export default function AppList({
	apps,
	selectedApp,
	onClick })
{
	return (
		<Flex
			sx={{
				pb: ["md", "sm"],
				mb: ["md", "lg"],
				gap: "sm",
				borderBottom: "1px solid",
				borderBottomColor: "primary50"
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
		</Flex>
	);
}
