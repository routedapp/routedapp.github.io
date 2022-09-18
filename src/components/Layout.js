import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container } from "theme-ui";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, pageContext })
{
	const site = useSiteMetadata();
	const { title } = pageContext.frontmatter;

	return (
		<>
			<Helmet
				htmlAttributes={{ lang: "en" }}
				title={title}
				titleTemplate={site.titleTemplate}
			/>
			<Header
				siteTitle={site.title}
				siteDescription={site.description}
			/>
			<Container as="main">
				{children}
			</Container>
			<Footer
				siteTitle={site.title}
				siteDescription={site.description}
			/>
		</>
	);
}
