import React, { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
	padding: 0;
	margin: 0;
`;
const Item = styled.li`
	list-style: none;
	margin: -1px 0 0 0;
	padding: 1rem;
	border: 1px solid #999;
	cursor: pointer;
`;
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
