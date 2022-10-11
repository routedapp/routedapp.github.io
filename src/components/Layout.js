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
		// the teaser page doesn't use the standard layout, so don't wrap it.  the
		// pageResources prop doesn't seem to be available during SSR, so we can't
		// use props.pageResources?.component?.default?.name === "Teaser" to check
		// if the Teaser component is being served on index.  just check the path
		// instead and don't wrap / for now.
	return props.location.pathname === "/"
		? element
		: <Layout {...props}>{element}</Layout>;
};
