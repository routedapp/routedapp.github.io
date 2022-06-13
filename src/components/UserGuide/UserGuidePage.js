import React from "react";
import Page from "@/pages/user-guides.mdx";

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
