import React from "react";
import { Box, Button, Flex, Heading } from "theme-ui";

export default function Callout({
	heading,
	subheading,
	cta,
	ctaLink = "#" })
{
	return (
		<Flex
			sx={{
				bg: "secondary",
				color: "white",
				px: "xxl",
				py: "lg",
				mx: "neg-lg",
				my: 0,
				flexDirection: "column",
				gap: "md",
				alignItems: "center",
				justifyContent: "space-between"
			}}
		>
			<Box sx={{ textAlign: "center" }}>
				<Heading sx={{ fontSize: "banner" }}>
					{heading}
				</Heading>
				{subheading &&
					<Heading variant="subheading">
						{subheading}
					</Heading>
				}
			</Box>
			{cta &&
				<Button
					onClick={() => window.location.href = ctaLink}
				>
					{cta}
				</Button>
			}
		</Flex>
	);
}
