import React from "react";
import { Themed } from "theme-ui";
import { head } from "@/components/Head";
import FAQList from "@/components/FAQList";
//import Glossary from "@/components/Glossary";
import HeaderImage from "@/components/HeaderImage";

import ambulanceImage from "@/images/header-ambulance.jpg";

export const Head = head("Frequently Asked Questions");

export default function FAQ() {
	return (
		<>
			<HeaderImage src={ambulanceImage} />

			<Themed.h1>Frequently Asked Questions</Themed.h1>

			<FAQList />

{/* hide the glossary until we have content */}
{/*
			<Themed.h1>Glossary of Terms</Themed.h1>

			<Glossary />
*/}
		</>
	);
}
