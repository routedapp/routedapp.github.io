import React from "react";
import { navigate } from "gatsby";
import { Box, Button, Image } from "theme-ui";
import { head } from "@/components/Head";
import BlockRow from "@/components/BlockRow";
import BlockCallout from "@/components/BlockCallout";
import Callout from "@/components/Callout";
import BodyText from "@/components/BodyText";
import Team from "@/components/Team";
import HeaderImage from "@/components/HeaderImage";
import TextBanner from "@/components/TextBanner";

import goldenGateImage from "@/images/header-golden-gate.jpg";
import footImage from "@/images/callout-foot.jpg";
import healthIcon from "@/images/icon-health-dark-gradient.png";

export const Head = head("Our Story");

export default function OurStory()
{
	return (
		<>
			<HeaderImage src={goldenGateImage} />

			<BodyText
				name="ourStory"
				sx={{
					blockquote: {
						m: 0,
						columns: "2 25rem",
						columnGap: "lg"
					}
				}}
			/>

			<BlockRow sx={{ mt: "lg" }}>
				<Image src={footImage} sx={{ width: "100%" }} />
				<BlockCallout icon={healthIcon}>
					<Box
						sx={{
							fontSize: "banner",
							fontWeight: "bold",
							mb: "md"
						}}>
						Curious how Routed could help your city?
					</Box>
					<Button onClick={() => navigate("mailto:contact@routedapp.org")}>Contact Us</Button>
				</BlockCallout>
			</BlockRow>

			<BodyText
				name="meetTheTeam"
				Container={TextBanner}
			/>

			<Team />

			<Callout
				heading="Interested in volunteering? Join our Code for America meetup on Wednesdays at 6:30pm PT"
				cta="Learn More"
				ctaLink="https://www.meetup.com/code-for-san-francisco/"
			/>
		</>
	);
}
