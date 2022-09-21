import React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";

const v = (key) => ({ [key]: value }) => value;
const image = ({ image, siteUrl }) => image && `${siteUrl}${image}`;

const metatags = [
	["description"],
	["image", image],
	["og:title", v("siteTitle")],
	["og:type", "website"],
	["og:url", ({ uri, siteUrl }) => `${siteUrl}${uri || ""}`],
	["og:image", image],
	["og:description", v("description")],
	["twitter:card", "summary_large_image"],
];

const faviconTags = [
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />,
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />,
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />,
	<link rel="manifest" href="/site.webmanifest" />,
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#425cc7" />,
	<meta name="msapplication-TileColor" content="#425cc7" />,
	<meta name="theme-color" content="#ffffff" />
];

function createMeta(
	[name, content],
	seo)
{
	let contentValue = content;

	if (contentValue === undefined) {
		contentValue = seo[name];
	} else if (typeof content === "function") {
		contentValue = content(seo);
	}

	if (contentValue) {
		if (name.startsWith("og:")) {
			return (
				<meta key={name} property={name} content={contentValue} />
			);
		} else {
			return (
				<meta key={name} name={name} content={contentValue} />
			);
		}
	}

	return null;
}

export default function Seo({
	uri,
	page,
	children })
{
	const metadata = useSiteMetadata();
	const { title: siteTitle, titleTemplate } = metadata;
	const { title = siteTitle } = page;
	const seo = {
		siteTitle,
		uri,
		...metadata,
		...page,
	};

	return (
		<Helmet
			htmlAttributes={{ lang: "en" }}
			title={title}
			titleTemplate={titleTemplate}
		>
			{metatags.map((tag) => createMeta(tag, seo))}
			{faviconTags}
			{children}
		</Helmet>
	);
}