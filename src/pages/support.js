import React from "react";
import { Themed } from "theme-ui";
import { head } from "@/components/Head";
import HeaderImage from "@/components/HeaderImage";
import laptopImage from "@/images/header-laptop.jpg";

export const Head = head("Support");

export default function Support() {
	return (
		<>
			<HeaderImage src={laptopImage} />

			<Themed.h1>Support</Themed.h1>

			<Themed.p>Get some support here!</Themed.p>
		</>
	);
}
