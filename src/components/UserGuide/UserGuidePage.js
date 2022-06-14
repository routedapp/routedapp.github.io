import React from "react";
import Page from "@/templates/user-guides.mdx";

export default function UserGuidePage({
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
			pageContext={guidePageContext}
		/>
	);
}
