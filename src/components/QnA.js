/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
	padding: 0;
	margin: 0;
`;
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
const Question = styled.h1`
	font-size: 1.5rem;
	margin: 1rem;
	padding: 0;
`;
const Answer = styled.p`
	font-size: 1.5rem;
	margin: 0 1rem 1rem;
	padding: 0;
`;

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

export function QnAList({ children })
{
	return (
		<List>
			{children}
		</List>
	);
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

export function Q({ children })
{
	return (
		<Question>
			{children}
		</Question>
	);
}

export function A({ children })
{
	return (
		<Answer>
			{children}
		</Answer>
	);
}
