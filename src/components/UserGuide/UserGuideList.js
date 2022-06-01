import React from "react";
import { Box, Text, Themed } from "theme-ui";

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
			<Themed.ul
				sx={{
					p: 0
				}}
			>
				{titles.map(title => {
					const style = title === selectedTitle
						? {
							fontWeight: "bold",
							color: "highlight",
							cursor: "default"
						}
						: {};

					return (
						<Themed.li
							key={title}
							sx={{
								listStyle: "none"
							}}
						>
							<Text
								sx={{
									cursor: "pointer",
									"&:hover, &:active": {
										color: "highlight"
									},
									...style,
								}}
								onClick={() => onClick(title)}
							>
								{title}
							</Text>
						</Themed.li>
					);
				})}
			</Themed.ul>
		</Box>
	);
}
