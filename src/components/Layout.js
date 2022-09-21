import React from "react";
import { Container } from "theme-ui";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";
import Seo from "./Seo";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
	uri,
	pageContext,
	children })
{

	const { description, title } = useSiteMetadata();

	return (
		<>
			<Seo
				uri={uri}
				page={pageContext.frontmatter}
			/>
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
