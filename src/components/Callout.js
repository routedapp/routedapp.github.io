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
				bg: "primary",
				color: "white",
				p: "xl",
				mx: "-lg",
				my: "xl",
				alignItems: "center",
				justifyContent: "space-between"
			}}
		>
			<Box sx={{ textAlign: "center" }}>
				<Heading>
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
