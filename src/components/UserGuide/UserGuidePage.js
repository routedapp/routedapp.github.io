import React from "react";
import Layout from "@/components/Layout";
import UserGuideDisplay from "./UserGuideDisplay";

export default function UserGuidePage({
	pageContext })
{
	const { app, title } = pageContext.guide;
	const guidePageContext = {
		frontmatter: {
			title: `${app} · ${title}`
		}
	};

	return (
		<Layout
			pageContext={guidePageContext}
		>
			<UserGuideDisplay
				app={app}
				title={title}
			/>
		</Layout>
	);
}
