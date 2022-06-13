import React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { Container } from "theme-ui";
import AppList from "./AppList";
import UserGuide from "./UserGuide";
import UserGuideList from "./UserGuideList";

	// including __typename on the ContentfulAsset is critical, for some reason
const query = graphql`
	{
		allContentfulList(filter: {type: {eq: "userGuide"}}) {
			nodes {
				name
				type
				items {
					... on ContentfulUserGuide {
						title
						slug
						app
						body {
							raw
							references {
								... on ContentfulAsset {
									contentful_id
									__typename
									gatsbyImageData
								}
							}
						}
					}
				}
			}
		}
	}
`;
const userGuidePath = (app, slug) => `/user-guides/${app.toLowerCase()}/${slug}`;

export default function UserGuideDisplay({
	title,
	app,
	body })
{
	const { allContentfulList: { nodes } } = useStaticQuery(query);
	const guides = nodes.map(({ items }) => items).reduce((result, list) => result.concat(list), []);
	const guideIndex = guides.reduce((result, guide) => {
		const { title, app } = guide;

		result[app][title] = guide;

		return result;
	}, { EMS: {}, Hospital: {} });
	const selectedApp = app || Object.keys(guideIndex)[0];
	const selectedTitle = title || Object.keys(guideIndex[selectedApp])[0];

	const handleAppClick = ({ target: { textContent: app } }) => {
		navigate(userGuidePath(app, Object.values(guideIndex[app])[0].slug));
	};

	const handleGuideClick = (title) => navigate(userGuidePath(selectedApp, guideIndex[selectedApp][title].slug));

	return (
		<Container
			sx={{ mt: 5 }}
		>
			<AppList
				selectedApp={selectedApp}
				onClick={handleAppClick}
			/>
			<UserGuideList
				titles={Object.keys(guideIndex[selectedApp])}
				selectedTitle={selectedTitle}
				onClick={handleGuideClick}
			/>
			<UserGuide
				title={selectedTitle}
				app={selectedApp}
				body={body}
			/>
		</Container>
	);
}
