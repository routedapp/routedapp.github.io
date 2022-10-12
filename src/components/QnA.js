/** @jsxImportSource theme-ui */
import React, { useState } from "react";

export const QnAList = (props) => (
	<ul
		{...props}
		sx={{
			p: 0,
			m: 0,
			mt: "md",
			mb: "xl"
		}}
	/>
);

const Item = (props) => (
	<li
		{...props}
		sx={{
			listStyle: "none",
			hyphens: "auto",
			margin: "-1px 0 0 0",
			padding: ["md", "sm"],
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: "grayDark",
			cursor: "pointer",
			position: "relative"
		}}
	/>
);

export const Q = (props) => (
		// eslint-disable-next-line jsx-a11y/heading-has-content
	<h2
		{...props}
		sx={{
			fontSize: "body",
			m: 0,
			mr: "lg",
			p: 0
		}}
	/>
)

export const A = (props) => (
	<div
		{...props}
		sx={{
			fontSize: "body",
			p: 0,

			"& p:last-of-type": {
				mb: 0,
			}
		}}
	/>
)

function Toggle({ expanded })
{
	return (
		<span
			sx={{
				top: "2rem",
				right: "1.5rem",
				fontSize: "4rem",
				lineHeight: ".5em",
				overflow: "hidden",
				position: "absolute",
				userSelect: "none",
				"&:hover": {
					color: "secondary"
				}
			}}
		>
			{expanded ? <>&#8722;</> : <>&#43;</>}
		</span>
	)
}

export function QnA({ defaultExpanded = false, children })
{
	const [expanded, setExpanded] = useState(defaultExpanded);
	const [Question, Answer] = React.Children.toArray(children);

	return (
		<Item
			onClick={() => setExpanded(!expanded)}
		>
			<Toggle expanded={expanded} />
			{Question}
			{expanded && Answer}
		</Item>
	);
}
