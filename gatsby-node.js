const path = require("path");

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
const guideHomePath = "/user-guides";
const guidePath = (app, slug) => `${guideHomePath}/${app.toLowerCase()}/${slug}`;

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const result = await graphql(userGuidesQuery);
	const nodes = result.data.allContentfulList.nodes;
	const guides = nodes.map(({ items }) => items).reduce((result, list) => result.concat(list), []);
	const guideIndex = guides.reduce((result, guide) => {
		const { title, app } = guide;

		result[app][title] = guide;

		return result;
	}, { EMS: {}, Hospital: {} });
	const [firstGuide] = Object.values(guideIndex.EMS);

	guides.forEach(guide => {
		const path = guidePath(guide.app, guide.slug);

		createPage({
			path,
			component: guidePageComponentPath,
			context: {
				guide,
				guideIndex
			}
		});
	});

	createPage({
		path: guideHomePath,
		component: guidePageComponentPath,
		context: {
			guide: firstGuide,
			guideIndex
		}
	});
};
