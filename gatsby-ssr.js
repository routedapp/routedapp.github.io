export { wrapPageElement } from "@/components/Layout";

export function onRenderBody({
	setHtmlAttributes })
{
	setHtmlAttributes({ lang: "en-US" });
}
