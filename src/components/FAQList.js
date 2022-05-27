import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { QnA, Q, A, QnAList } from "./QnA";

const query = graphql`
	{
		contentfulList(name: { eq: "faqs" }) {
			items {
				question
				answer {
					raw
				}
			}
		}
	}
`;

export default function FAQList()
{
	const { contentfulList: { items } } = useStaticQuery(query);

	return (
		<QnAList>
			{items.map(({ question, answer }, i) => (
				<QnA key={i}>
					<Q>{question}</Q>
					<A>{renderRichText(answer)}</A>
				</QnA>
			))}
		</QnAList>
	);
}
