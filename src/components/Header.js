import React, { useEffect, useRef, useState } from "react";
import { Box, Close, Container, Flex, MenuButton } from "theme-ui";
import { useBreakpointIndex } from "@theme-ui/match-media";
import Link from "./Link";
import Logo from "./Logo";

const expandedClass = "navmenu-expanded";

const homeLinks = [
	<Link to="/">Home</Link>,
	<Link to="/our-story/">Our Story</Link>,
	<Link to="/faq/">FAQ</Link>,
	<Link to="/support/">Support</Link>,
	<Link to="/user-guides/" partiallyActive={true}>User Guides</Link>,
].map((el) => React.cloneElement(el, { key: el.props.to }));
const links = homeLinks.slice(1);

function MenuToggle({
	open,
	onClick })
{
	return (
		<Box
			onClick={onClick}
			sx={{
					// line up the icon with the right edge of the header image
				mr: "-6px",
				zIndex: 150,

				":hover": {
					color: "secondary"
				},

				"& button": {
					cursor: "pointer",
				}
			}}
		>
			{open
				? <Close title="Close the navigation menu" />
				: <MenuButton title="Open the navigation menu" />}
		</Box>
	);
}

function Menu({
	open,
	onToggle })
{
	return (
		<>
			<MenuToggle
				open={open}
				onClick={onToggle}
			/>
			<Box
					// since this box is only displayed when the menu is open, a click
					// on the modal overlay will always toggle it closed
				onClick={onToggle}
				sx={{
					background: "rgba(0, 0, 0, .5)",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					position: "absolute",
					zIndex: 100,
					display: open ? "block" : "none",
				}}
			>
				<Flex
						// ignore stray clicks on the menu background
					onClick={(e) => e.stopPropagation()}
					sx={{
						bg: "white",
						width: "24rem",
						height: "100%",
						p: "xl",
						pt: "xxl",
						top: 0,
						right: 0,
						position: "fixed",
						flexDirection: "column",
						alignItems: "self-start",
						gap: "xl",
						display: "flex",
							// make sure the menu can scroll vertically if the window is too short
						overflowY: "auto",

						"& > a": {
							fontSize: "banner",
						}
					}}
				>
					{homeLinks}
				</Flex>
			</Box>
		</>
	);
}

export default function Header({
	location: { pathname } })
{
	const [menuOpen, setMenuOpen] = useState(false);
	const pathnameRef = useRef();
	const navRef = useRef();
	const breakpoint = useBreakpointIndex();

	const handleMenuToggle = (event) => {
		setMenuOpen(!menuOpen);
		event.preventDefault();
	};

	const handleMenuKeyDown = (event) => {
		if (menuOpen && event.key === "Escape") {
			setMenuOpen(false);
		}
	};

	useEffect(() => {
		if (menuOpen) {
				// add the navmenu-expanded class to the html element, to prevent the
				// page from scrolling.  focus the nav element so it can listen for
				// key events.
			document.documentElement.classList.add(expandedClass);
			navRef.current?.focus();
		} else {
			document.documentElement.classList.remove(expandedClass);
		}
	}, [menuOpen]);


	useEffect(() => {
		if (pathname !== pathnameRef.current || (menuOpen && breakpoint > 0)) {
				// the location has changed, either because the user clicked a link in
				// the menu or they navigated through the browser history.  or the menu
				// is visible and the user made the window wide enough to show all the
				// links.  whatever happened, we want to track the current location and
				// close the menu.
			pathnameRef.current = pathname;
			setMenuOpen(false);
		}
	}, [pathname, menuOpen, breakpoint]);

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
				{breakpoint === 0
					? (
						<Menu
							open={menuOpen}
							onToggle={handleMenuToggle}
						/>
					) : (
						<Flex
							sx={{
								gap: "md",
								alignItems: "center",
							}}
						>
							{links}
						</Flex>
					)
				}
			</Flex>
		</Container>
	);
}
