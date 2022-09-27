/** @jsxImportSource theme-ui */
import React from "react";
import { head } from "@/components/Head";
import HeaderImage from "@/components/HeaderImage";
import laptopImage from "@/images/header-laptop.jpg";

export const Head = head("Support");

export default function Support() {
	return (
		<>
			<HeaderImage src={laptopImage} />

			<h1>Support</h1>

			<p>Get some support here!</p>
		</>
	);
}
