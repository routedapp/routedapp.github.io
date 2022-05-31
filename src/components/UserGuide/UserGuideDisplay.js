import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "theme-ui";
import UserGuide from "./UserGuide";
import UserGuideList from "./UserGuideList";

	// including __typename on the ContentfulAsset is critical, for some reason
const query = graphql`
	{
		allContentfulList(filter: {name: {eq: "userGuideEMS"}}) {
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

export default function UserGuideDisplay() {
	const { allContentfulList: { nodes: [{ items }] } } = useStaticQuery(query);
	const [selectedApp, setSelectedApp] = useState("EMS");
	const [selectedTitle, setSelectedTitle] = useState(items[0].title);
	const guideIndex = items.reduce((result, item) => {
		const { title, app } = item;

		result[app][title] = item;

		return result;
	}, { EMS: {}, Hospital: {} });
	const { body } = guideIndex[selectedApp][selectedTitle];

	const handleGuideClick = (title) => setSelectedTitle(title);

	return (
		<Container
			sx={{ mt: 5 }}
		>
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
