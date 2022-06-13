import React from "react";
import { navigate } from "gatsby";
import { Container } from "theme-ui";
import AppList from "./AppList";
import UserGuide from "./UserGuide";
import UserGuideList from "./UserGuideList";

const userGuidePath = (app, slug) => `/user-guides/${app.toLowerCase()}/${slug}`;

export default function UserGuideDisplay({
	guide,
	guideIndex })
{
	const { title, app, body } = guide;

	const handleAppClick = ({ target: { textContent: app } }) => {
		navigate(userGuidePath(app, Object.values(guideIndex[app])[0].slug));
	};

	const handleGuideClick = (title) => navigate(userGuidePath(app, guideIndex[app][title].slug));

	return (
		<Container
			sx={{ mt: 5 }}
		>
			<AppList
				selectedApp={app}
				onClick={handleAppClick}
			/>
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
		</Container>
	);
}
