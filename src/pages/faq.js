/** @jsxImportSource theme-ui */
import React from "react";
import { head } from "@/components/Head";
import FAQList from "@/components/FAQList";
import Glossary from "@/components/Glossary";
import HeaderImage from "@/components/HeaderImage";

import ambulanceImage from "@/images/header-ambulance.jpg";

export const Head = head("Frequently Asked Questions");

export default function FAQ() {
	return (
		<>
			<HeaderImage src={ambulanceImage} />

			<h1>Frequently Asked Questions</h1>

			<FAQList />

			<h1>Glossary of Terms</h1>

			<Glossary />
		</>
	);
}
