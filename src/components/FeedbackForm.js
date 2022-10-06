/** @jsxImportSource theme-ui */
import React from "react";

export default function FeedbackForm()
{
	return (
		<iframe
			title="Feedback Form"
			className="freshwidget-embedded-form"
			id="freshwidget-embedded-form"
			src="https://routedapp.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded&searchArea=no&formTitle=Please+describe+the+incident"
			scrolling="no"
			height="450px"
			width="100%"
			frameBorder="0"
			sx={{
				my: "lg"
			}}
		/>
	);
}
