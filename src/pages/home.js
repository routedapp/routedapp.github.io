import React from "react";
import { navigate } from "gatsby";
import { Box, Button, Heading, Image, Text } from "theme-ui";
import { head } from "@/components/Head";
import { Feature, Description } from "@/components/Feature";
import HeaderImage from "@/components/HeaderImage";
import BlockRow from "@/components/BlockRow";
import BlockCallout from "@/components/BlockCallout";
import BodyText from "@/components/BodyText";
import TextBanner from "@/components/TextBanner";

import handImage from "@/images/header-hand.jpg";
import productEMTImage from "@/images/product-emt.jpg";
import hospitalsImage from "@/images/for-hospitals.png";
import waitTimesText from "@/images/text-wait-times.svg";
import ambulanceText from "@/images/text-ambulance.svg";
import speedIcon from "@/images/icon-speed-dark-gradient.png";
import locationIcon from "@/images/icon-location-dark-gradient.png";

export const Head = head("Home");

export default function Home()
{
	return (
		<>
			<HeaderImage
				src={handImage}
				height={640}
			>
				<Box
					sx={{
						fontSize: "3.25rem",
						fontWeight: "bold",
						lineHeight: 1.2,
						left: "md",
						bottom: "md",
						width: "60%",
						p: "md",
						bg: "white",
						position: "absolute",
						"& strong": {
							color: "secondary"
						}
					}}
				>
					Directing patients to the <strong>most available</strong> care.
				</Box>
			</HeaderImage>

			<BodyText name="problem" sx={{ "& > p": { fontSize: "banner", m: 0 } }} />

			<BlockRow sx={{ mt: "xl" }}>
				<BlockCallout icon={speedIcon}>
					<Image
						src={waitTimesText}
						sx={{ width: "100%" }}
						alt="ER wait times in SF range from 2 to 4.5 hours. --Hospital Stats"
					/>
				</BlockCallout>
				<BlockCallout icon={locationIcon}>
					<Image
						src={ambulanceText}
						sx={{ width: "100%" }}
						alt="'Ambulance unit and staff that are delayed in the ED are effectively
							out of service, decreasing advanced life support coverage in the community.'
							--California Hospital Association, 2014"
					/>
				</BlockCallout>
			</BlockRow>

			<BodyText
				name="mission"
				Container={TextBanner}
				sx={{
					mt: "xl",
					mb: 0
				}}
			/>

			<Feature>
				<Description sx={{ alignItems: "self-end", textAlign: "right", pl: "lg" }}>
					<Heading variant="headingFeature">
						For EMTs
					</Heading>
					<Box>
						Know what emergency departments have open beds.
					</Box>
					<Button onClick={() => navigate("/user-guides/ems")}>
						View EMT User Guide
					</Button>
				</Description>
				<Image
					src={productEMTImage}
					alt="EMT product screenshot"
				/>
			</Feature>

			<Feature>
				<Image
					src={hospitalsImage}
					alt="Hospital product screenshot"
				/>
				<Description sx={{ pr: "lg" }}>
					<Heading variant="headingFeature">
						For Hospitals
					</Heading>
					<Box>
						Prepare for incoming patients with digital ringdowns.
					</Box>
					<Button onClick={() => navigate("/user-guides/hospital")}>
						View Hospital User Guide
					</Button>
				</Description>
			</Feature>

			<TextBanner>
				<BodyText name="helpsEMS" Container={Text} />
			</TextBanner>

			<BlockRow>
				<Box />
				<BodyText
					name="commsPipeline"
					sx={{ "&, & > p": { m: 0 } }}
				/>
			</BlockRow>
		</>
	);
}
