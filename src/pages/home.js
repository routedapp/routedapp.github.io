import React from "react";
import { navigate } from "gatsby";
import { Box, Button, Flex, Heading, Image, Text } from "theme-ui";
import { head } from "@/components/Head";
import { Feature, Description } from "@/components/Feature";
import HeaderImage from "@/components/HeaderImage";
import BlockRow from "@/components/BlockRow";
import BlockCallout from "@/components/BlockCallout";
import BodyText from "@/components/BodyText";
import TextBanner from "@/components/TextBanner";

import handImage from "@/images/header-hand.jpg";
import productEMTImage from "@/images/product-emt.png";
import productHospitalImage from "@/images/product-hospital.png";
import waitTimesText from "@/images/text-wait-times.svg";
import ambulanceText from "@/images/text-ambulance.svg";
import speedIcon from "@/images/icon-speed-dark-gradient.png";
import locationIcon from "@/images/icon-location-dark-gradient.png";

export const Head = head("Home");

export default function Home()
{
	return (
		<>
			<HeaderImage src={handImage}>
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

			<BodyText name="problem" />

			<BlockRow sx={{ mt: "lg" }}>
				<BlockCallout icon={speedIcon}>
					<Image
						src={waitTimesText}
						sx={{
							width: "80%",
							mt: "3%"
						}}
						alt="ER wait times in SF range from 2 to 4.5 hours. --Hospital Stats"
					/>
				</BlockCallout>
				<BlockCallout icon={locationIcon}>
					<Image
						src={ambulanceText}
						sx={{
							width: "100%",
							mt: "3%"
						}}
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
				<Description
					sx={{
						alignItems: "self-end",
						textAlign: "right",
						pl: "lg",
						pb: "xl"
					}}
				>
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

			{/* add a negative top margin to overlap the two Feature rows.  add padding
					to the Descriptions to keep the text centered vertically on the
					available white space. */}
			<Feature sx={{ mt: "-xl" }}>
				<Image
					src={productHospitalImage}
					alt="Hospital product screenshot"
				/>
				<Description
					sx={{
						pt: "xl",
						pr: "lg"
					}}
				>
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
				<Flex sx={{ gap: "md" }}>
					<Image
						src="https://images.ctfassets.net/8hguoq1zn55w/WQKYjYwEauIEyybKZadTb/e596b50476ac4c4606e17fdba29e0def/Ringdown_Form.gif?h=532"
						alt="Ringdown form animation"
					/>
					<Image
						src="https://images.ctfassets.net/8hguoq1zn55w/1ul5Q5YzH9Jff3DIEyByVR/eee81079b6698531ec9dcf3ba346816e/Incoming_Ringdown.gif?h=532"
						alt="Incoming ringdown animation"
					/>
				</Flex>
				<BodyText
					name="commsPipeline"
					sx={{ "&, & > p": { m: 0 } }}
				/>
			</BlockRow>
		</>
	);
}
