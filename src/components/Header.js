import React, { useEffect, useRef, useState } from "react";
import { Box, Close, Container, Flex, MenuButton } from "theme-ui";
import { useBreakpointIndex } from "@theme-ui/match-media";
import Link from "./Link";
import Logo from "./Logo";

const expandedClass = "navmenu-expanded";
const menuStyles = {
	gap: "md",
	alignItems: "center",
	display: ["none", "flex"],

	[`.${expandedClass} &`]: {
		bg: "white",
		width: "100%",
		height: "100%",
		p: "xl",
		pt: "xxl",
		top: 0,
		position: "fixed",
		flexDirection: "column",
		alignItems: "self-start",
		gap: "xl",
		display: "flex",
			// make sure the menu can scroll vertically if the window is too short
		overflowY: "auto",
		zIndex: 100,

		"& > a": {
			fontSize: "banner",
		}
	},
};

function MenuToggle({
	menuExpanded,
	onClick })
{
	return (
		<Box
			onClick={onClick}
			sx={{
					// line up the icon with the right edge of the header image
				mr: "-6px",
				display: ["inline-block", "none"],
				zIndex: 150,

				":hover": {
					color: "secondary"
				},

				"& button": {
					cursor: "pointer",
				}
			}}
		>
			{menuExpanded
				? <Close title="Close the navigation menu" />
				: <MenuButton title="Open the navigation menu" />}
		</Box>
	);
}

export default function Header({
	location: { pathname } })
{
	const [menuExpanded, setMenuExpanded] = useState(false);
	const pathnameRef = useRef();
	const navRef = useRef();
	const breakpoint = useBreakpointIndex();

	const handleMenuToggle = (event) => {
		setMenuExpanded(!menuExpanded);
		event.preventDefault();
	};

	const handleMenuKeyDown = (event) => {
		if (menuExpanded && event.key === "Escape") {
			setMenuExpanded(false);
		}
	};

	useEffect(() => {
		if (menuExpanded) {
				// add the navmenu-expanded class to the html element, to prevent the
				// page from scrolling.  focus the nav element so it can listen for
				// key events.
			document.documentElement.classList.add(expandedClass);
			navRef.current?.focus();
		} else {
			document.documentElement.classList.remove(expandedClass);
		}
	}, [menuExpanded]);


	useEffect(() => {
		if (pathname !== pathnameRef.current || (menuExpanded && breakpoint > 0)) {
				// the location has changed, either because the user clicked a link in
				// the menu or they navigated through the browser history.  or the menu
				// is visible and the user made the window wide enough to show all the
				// links.  whatever happened, we want to track the current location and
				// close the menu.
			pathnameRef.current = pathname;
			setMenuExpanded(false);
		}
	}, [pathname, menuExpanded, breakpoint]);

	return (
		<Container as="header"
			sx={{ py: "md" }}
		>
			<Flex as="nav"
				ref={navRef}
				tabIndex={0}
				onKeyDown={handleMenuKeyDown}
				sx={{
					justifyContent: "space-between",
					alignItems: "center",
					outline: "none"
				}}
			>
				<Link to="/"
					title="Home"
				>
					<Logo sx={{ height: "2.25rem" }} />
				</Link>
				<MenuToggle
					menuExpanded={menuExpanded}
					onClick={handleMenuToggle}
				/>
				<Flex sx={menuStyles}>
					{menuExpanded &&
							// add a link to the home page only when the menu is expanded
						<Link to="/">Home</Link>
					}
					<Link to="/our-story/">Our Story</Link>
					<Link to="/faq/">FAQ</Link>
					<Link to="/support/">Support</Link>
					<Link to="/user-guides/" partiallyActive={true}>User Guides</Link>
				</Flex>
			</Flex>
		</Container>
	);
}
