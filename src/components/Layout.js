import React from "react";
import { Container } from "theme-ui";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
	children })
{
	const { description, title } = useSiteMetadata();

	return (
		<>
			<Header
				siteTitle={title}
				siteDescription={description}
			/>
			<Container as="main">
				{children}
			</Container>
			<Footer
				siteTitle={title}
				siteDescription={description}
			/>
		</>
	);
}

export const wrapPageElement = ({ element, props }) => {
		// the teaser page doesn't use the standard layout, so don't wrap it
	return props.pageResources.component.default.name === "Teaser"
		? element
		: <Layout {...props}>{element}</Layout>;
};
