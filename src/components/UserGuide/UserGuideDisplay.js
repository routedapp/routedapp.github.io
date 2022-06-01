import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
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

export default function UserGuideDisplay()
{
	const { allContentfulList: { nodes } } = useStaticQuery(query);
	const items = nodes.map(({ items }) => items).reduce((result, list) => result.concat(list), []);
	const [selectedApp, setSelectedApp] = useState("EMS");
	const [selectedTitle, setSelectedTitle] = useState(items[0].title);
	const guideIndex = items.reduce((result, item) => {
		const { title, app } = item;

		result[app][title] = item;

		return result;
	}, { EMS: {}, Hospital: {} });
	const { body } = guideIndex[selectedApp][selectedTitle];

	const handleAppClick = ({ target: { textContent: app } }) => {
		setSelectedApp(app);
		setSelectedTitle(Object.keys(guideIndex[app])[0]);
	};

	const handleGuideClick = (title) => setSelectedTitle(title);

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
