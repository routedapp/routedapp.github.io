import path from "path";
import { userGuidePath, home } from "./src/components/UserGuide/userGuidePath";

	// including __typename on the ContentfulAsset is critical, for some reason
const userGuidesQuery = `
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
const guidePageComponentPath = path.resolve("src/components/UserGuide/UserGuidePage.js");

export const createPages = async ({ graphql, actions: { createPage } }) => {
	const result = await graphql(userGuidesQuery);
	const nodes = result.data.allContentfulList.nodes;
	const guides = nodes.map(({ items }) => items).reduce((result, list) => result.concat(list), []);
	const guideIndex = guides.reduce((result, guide) => {
		const { title, app } = guide;

		result[app][title] = guide;

		return result;
	}, { EMS: {}, Hospital: {} });
	const firstGuides = Object.values(guideIndex)
		.map((guides) => Object.values(guides)[0])

	function createGuidePage(
		path,
		guide)
	{
		createPage({
			path,
			component: guidePageComponentPath,
			context: {
				guide,
				guideIndex
			}
		});
	}

		// create pages at /user-guides, /user-guides/[app], and then one for every
		// /user-guides/[app]/[guide]
	createGuidePage(home, firstGuides[0]);
	firstGuides.forEach(guide => {
		createGuidePage(userGuidePath(guide.app), guide);
	});
	guides.forEach(guide => {
		createGuidePage(userGuidePath(guide.app, guide.slug), guide);
	});
};
