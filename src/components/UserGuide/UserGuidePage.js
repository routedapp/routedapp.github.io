import React from "react";
import Layout from "@/components/Layout";
import UserGuide from "./UserGuide";

const guidePageTitle = ({ app, title }) => `${app} · ${title}`;

export default function UserGuidePage({
	pageContext: { guide } })
{
	const { title, body } = guide;
	const guidePageContext = {
		frontmatter: {
			title: guidePageTitle(guide)
		}
	};

	return (
		<Layout
			pageContext={guidePageContext}
		>
			<UserGuide
				title={title}
				body={body}
			/>
		</Layout>
	);
}
