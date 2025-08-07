import React from "react";
import "./BlackButton.css";

const BlackButton = ({
	value,
	paddingVertical,
	paddingHorizontal,
	differense = false,
}) => {
	return (
		<button
			className={`black-button ${
				differense ? "black-button--differense" : ""
			}`}
			style={{
				padding: `${paddingVertical} ${paddingHorizontal}`,
			}}
		>
			{value}
		</button>
	);
};

export default BlackButton;
