import { graphql, useStaticQuery } from "gatsby";

export function useSiteMetadata()
{
	const { site } = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
					titleTemplate
					description
					siteUrl
					image
				}
			}
		}
	`);

	return site.siteMetadata;
}
