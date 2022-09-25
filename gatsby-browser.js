import "@fontsource/public-sans/variable.css";
import "@fontsource/public-sans/variable-italic.css";
import { home } from "@/components/UserGuide/userGuidePath";

export { wrapPageElement } from "@/components/Layout";

export const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps: { location: { pathname } },
}) => {
	const userGuidePath = home + "/";
		// prevRouterProps will be undefined when the site first loads
	const wasOnGuide = prevRouterProps?.location.pathname.startsWith(userGuidePath);

		// return false when the user is navigating within the user guide section,
		// but isn't clicking the link for the User Guides page.  that way, if they
		// click the guide link in the footer, the page will scroll to the top, but
		// if they're switching between guides, it won't.
	return !(pathname.startsWith(userGuidePath) && pathname !== userGuidePath && wasOnGuide);
}
