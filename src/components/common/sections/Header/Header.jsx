import React from "react";
import logo from "../../../../assets/logo/logo.svg";
import "./Header.css";

import BlackButton from "../../../UI/buttons/BlackButton";

export const Header = () => {
	return (
		<div className="wrapper">
			<div className="header">
				<div className="header__right">
					<div className="header__logo">
						<img
							src={logo}
							alt="logo"
							style={{ width: "74px", height: "74px" }}
						/>
					</div>
					<div className="header__nav">
						<div className="header__nav__item">Episodes</div>
						<div className="header__nav__item">About</div>
						<div className="header__nav__item">More</div>
					</div>
				</div>
				<div className="header__left">
					<BlackButton
						value="Recent Episodes"
						paddingVertical={"12px"}
						paddingHorizontal={"24px"}
						differense={true}
					/>
					<BlackButton
						value="Subscribe"
						paddingVertical={"12px"}
						paddingHorizontal={"24px"}
					/>
				</div>
			</div>
		</div>
	);
};
