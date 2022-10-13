//import { Head as PageHead, default as Page } from "./teaser";
import { Head as PageHead, default as Page } from "./home";

	// for some reason, re-exporting the Head and default imports from the JS
	// files, like `export { Head, default } from "./teaser"` works in the dev
	// build, but not in production
export const Head = PageHead;
export default Page;
