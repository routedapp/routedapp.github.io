import React from "react";
import { Themed } from "theme-ui";
import { default as PageHead } from "@/components/Head";
import UserGuideDisplay from "@/components/UserGuide/UserGuideDisplay";
import HeaderImage from "@/components/HeaderImage";
import syringeImage from "@/images/header-syringe.jpg";

export const Head = (props) => {
		// the guide object that we need to generate the page title is supplied by
		// createPages() via the pageContext
	const { pageContext: { guide: { app, title } } } = props;

	return (
		<PageHead
			{...props}
			title={`${app} · ${title}`}
		/>
	);
}

export default function UserGuides({ pageContext: { guide, guideIndex } }) {
	return (
		<>
			<HeaderImage src={syringeImage} />

			<Themed.h1>User Guides</Themed.h1>
			<Themed.h2>Follow the step-by-step instructions below to get started with your
				Routed account.</Themed.h2>

			<UserGuideDisplay
				guide={guide}
				guideIndex={guideIndex}
			/>
		</>
	);
}
