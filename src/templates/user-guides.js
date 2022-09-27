import React from "react";
import { default as PageHead } from "@/components/Head";
import UserGuideDisplay from "@/components/UserGuide/UserGuideDisplay";
import HeaderImage from "@/components/HeaderImage";
import BodyText from "@/components/BodyText";
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

			<BodyText name="userGuides" sx={{ "& > p": { fontSize: "banner", m: 0 } }} />

			<UserGuideDisplay
				guide={guide}
				guideIndex={guideIndex}
			/>
		</>
	);
}
