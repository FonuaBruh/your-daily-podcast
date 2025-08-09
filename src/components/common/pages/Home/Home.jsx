import React from "react";
import { Header } from "../../sections/Header/Header";
import { Hero } from "../../sections/Hero/Hero";
import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<Header />
			<Hero />
		</div>
	);
};

export default Home;
