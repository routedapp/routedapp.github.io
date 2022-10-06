import React from "react";
import { head } from "@/components/Head";
import HeaderImage from "@/components/HeaderImage";
import BodyText from "@/components/BodyText";
import FeedbackForm from "@/components/FeedbackForm";
import laptopImage from "@/images/header-laptop.jpg";

export const Head = head("Support");

export default function Support() {
	return (
		<>
			<HeaderImage src={laptopImage} />

			<BodyText name="support" sx={{ "& > p": { fontSize: "banner" } }} />

			<FeedbackForm />
		</>
	);
}
