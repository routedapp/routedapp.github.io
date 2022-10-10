import React from "react";
import { navigate } from "gatsby";
import { Container, Grid } from "theme-ui";
import AppList from "./AppList";
import UserGuide from "./UserGuide";
import UserGuideList from "./UserGuideList";
import { userGuidePath } from "./userGuidePath";

	// the subpage for each guide is generated in createPages() in gatsby-node.ts
export default function UserGuideDisplay({
	guide,
	guideIndex })
{
	const { title, app, body } = guide;
	const apps = Object.keys(guideIndex);

	const handleAppClick = ({ target: { textContent: appName } }) => {
		const app = guideIndex[appName];

		if (app) {
			navigate(userGuidePath(appName, Object.values(app)[0].slug));
		}
	};

	return (
		<Container
			sx={{
				mt: "lg",
				p: 0
			}}
		>
			<AppList
				apps={apps}
				selectedApp={app}
				onClick={handleAppClick}
			/>
			<Grid
				sx={{
					gridAutoFlow: ["row", "column"],
						// use a fixed width for the guide list in the left column so it
						// doesn't shift when the longest guide name changes.  use auto on
						// mobile when it switches to a row layout.
					gridTemplateColumns: ["auto", "20rem 1fr"],
					gap: "lg"
				}}
			>
				<UserGuideList
					guides={guideIndex[app]}
					selectedTitle={title}
				/>
				<UserGuide
					title={title}
					app={app}
					body={body}
				/>
			</Grid>
		</Container>
	);
}
