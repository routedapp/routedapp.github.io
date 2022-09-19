import React from "react";
import { navigate } from "gatsby";
import { Container, Grid } from "theme-ui";
import AppList from "./AppList";
import UserGuide from "./UserGuide";
import UserGuideList from "./UserGuideList";
import { userGuidePath } from "./userGuidePath";

export default function UserGuideDisplay({
	guide,
	guideIndex })
{
	const { title, app, body } = guide;
	const apps = Object.keys(guideIndex);

	const handleAppClick = ({ target: { textContent: app } }) => {
		navigate(userGuidePath(app, Object.values(guideIndex[app])[0].slug));
	};

	const handleGuideClick = (title) => navigate(userGuidePath(app, guideIndex[app][title].slug));

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
					gridAutoFlow: "column",
					gap: "lg"
				}}
			>
				<UserGuideList
					titles={Object.keys(guideIndex[app])}
					selectedTitle={title}
					onClick={handleGuideClick}
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
