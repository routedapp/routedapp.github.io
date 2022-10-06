/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import Link from "@/components/Link";
import { userGuidePath } from "@/components/UserGuide/userGuidePath";

export default function UserGuideList({
	guides,
	selectedTitle })
{
	return (
		<Box as="nav"
			sx={{
				my: 5
			}}
		>
			<ul
				sx={{
					p: 0,
					m: 0
				}}
			>
				{Object.values(guides).map(({ app, title, slug }) => {
					return (
						<li
							key={title}
							sx={{
								listStyle: "none",
								mb: "sm"
							}}
						>
							<Link
								to={userGuidePath(app, slug)}
								className={(title === selectedTitle ? "active" : "")}
								sx={{ fontSize: "1.5rem" }}
							>
								{title}
							</Link>
						</li>
					);
				})}
			</ul>
		</Box>
	);
}
