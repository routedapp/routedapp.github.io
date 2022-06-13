const path = require("path");

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
					}
				}
			}
		}
	}
`;
const guidePage = path.resolve("src/components/UserGuide/UserGuidePage.js");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const result = await graphql(userGuidesQuery);
	const nodes = result.data.allContentfulList.nodes;
	const guides = nodes.map(({ items }) => items).reduce((result, list) => result.concat(list), []);

	guides.forEach(guide => {
		const path = `/user-guides/${guide.app.toLowerCase()}/${guide.slug}`;

		console.info("Creating page:", path);
		createPage({
			path,
			component: guidePage,
			context: { guide }
		});
	});
};
