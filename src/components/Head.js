import React from "react";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";

const v = (key) => ({ [key]: value }) => value;
const image = ({ image, siteUrl }) => image && `${siteUrl}${image}`;

const metatags = [
	["description"],
	["image", image],
	["og:title", ({ title, siteTitle }) => `${title} · ${siteTitle}`],
	["og:url", ({ pathname, siteUrl }) => `${siteUrl}${pathname || ""}`],
	["og:image", image],
	["og:description", v("description")],
	["og:type", "website"],
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
].map((tag, i) => React.cloneElement(tag, { key: `favicon${i}` }));

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

export default function Head({
	title,
	location: { pathname },
	children })
{
	const metadata = useSiteMetadata();
	const { title: siteTitle, titleTemplate = "%s" } = metadata;
	const pageTitle = title || siteTitle;
	const seo = {
		...metadata,
		siteTitle,
		pathname,
		title: pageTitle,
	};

	return (
		<>
			<title>{titleTemplate.replace("%s", pageTitle)}</title>
			{metatags.map((tag) => createMeta(tag, seo))}
			{faviconTags}
			{children}
		</>
	);
}

export const head = (title) => (props) => <Head title={title} {...props} />;
