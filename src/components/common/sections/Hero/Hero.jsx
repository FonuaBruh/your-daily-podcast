import React from "react";
import "./Hero.css";
import Lasso from "../../../UI/designElements/Lasso";
import Stars from "../../../UI/designElements/Stars";

export const Hero = () => {
	return (
		<div className="wrapper">
			<div className="hero">
				<div className="hero__content">
					<Lasso />
					<div className="hero__text">
						<h1>
							Your Daily <br />
							<span>Podcast</span>
						</h1>
						<h2>
							We cover all kinds of categories and <br /> a weekly
							special guest.
						</h2>
					</div>
					<Stars />
				</div>
				<div className="hero__cards"></div>
				<div className="hero__socials"></div>
			</div>
		</div>
	);
};
