import React from "react";
import { head } from "@/components/Head";
import HeaderImage from "@/components/HeaderImage";
import BodyText from "@/components/BodyText";
import FeedbackForm from "@/components/FeedbackForm";
import laptopImage from "@/images/header-laptop.jpg";
import { Link, Paragraph } from "theme-ui";

export const Head = head("Support");

export default function Support() {
	return (
		<>
			<HeaderImage src={laptopImage} />

			<BodyText name="support" />

			<FeedbackForm />

			<Paragraph sx={{ mb: "xl" }}>
				For other support inquiries, please
				email <Link href="mailto:support@routedapp.org" sx={{ color: "highlight" }}>contact@routedapp.org</Link>.
			</Paragraph>
		</>
	);
}
