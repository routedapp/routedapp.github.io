/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";

const selected = {
	fontWeight: "bold",
	color: "highlight",
	cursor: "default"
};
const unselected = {
	cursor: "pointer",
	"&:hover, &:active": {
		color: "highlight"
	},
};

export default function UserGuideList({
	titles,
	selectedTitle,
	onClick
}) {
	return (
		<Box as="nav"
			sx={{
				my: 5
			}}
		>
			<ul
				sx={{
					fontSize: "1.125rem",
					p: 0,
					m: 0
				}}
			>
				{titles.map(title => {
					return (
						<li
							key={title}
							sx={{
								listStyle: "none",
								mb: "sm"
							}}
						>
							<span
								sx={title === selectedTitle ? selected : unselected}
								onClick={() => onClick(title)}
							>
								{title}
							</span>
						</li>
					);
				})}
			</ul>
		</Box>
	);
}
