import React from "react";
import { Container } from "theme-ui";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
	location,
	children })
{
	const { description, title } = useSiteMetadata();

	return (
		<>
			<Header
					// pass the current location to the Header so it can tell when the
					// user has navigated to a different page
				location={location}
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
	return <Layout {...props}>{element}</Layout>;
};
