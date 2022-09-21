import React from "react";
import Page from "@/templates/user-guides.mdx";

export default function UserGuidePage({
	uri,
	pageContext: { guide, guideIndex } })
{
	const { app, title } = guide;
	const guidePageContext = {
		guide,
		guideIndex,
		frontmatter: {
			title: `${app} · ${title}`
		}
	};

	return (
		<Page
			uri={uri}
			pageContext={guidePageContext}
		/>
	);
}
