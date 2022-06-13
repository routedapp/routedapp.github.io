import React from "react";
import Page from "@/pages/user-guides.mdx";

export default function UserGuidePage({
	pageContext: { guide } })
{
	const { app, title } = guide;
	const guidePageContext = {
		guide,
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
