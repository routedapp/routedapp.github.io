/** @jsxImportSource theme-ui */
import React, { useState } from "react";

export const QnAList = (props) => (
	<ul
		{...props}
		sx={{
			p: 0,
			m: 0
		}}
	/>
);

const Item = (props) => (
	<li
		{...props}
		sx={{
			listStyle: "none",
			margin: "-1px 0 0 0",
			padding: "1rem 5rem 1rem 1rem",
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: "primary",
			cursor: "pointer",
			position: "relative"
		}}
	/>
);

export const Q = (props) => (
		// eslint-disable-next-line jsx-a11y/heading-has-content
	<h1
		{...props}
		sx={{
			fontSize: 5,
			m: "1rem",
			p: 0
		}}
	/>
)

export const A = (props) => (
	<div
		{...props}
		sx={{
			m: "0 1rem 1rem",
			p: 0
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
