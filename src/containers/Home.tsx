import React, { lazy } from "react";
import { home_text } from "../assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const TypeWriter = lazy(() => import("../components/TypeWriter"));

const Home = () => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate("/generate-qr");
	};

	return (
		<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
			<p className="text-7xl text-gray-800 font-poppins my-4 font-bold md:text-4xl">
				Welcome to qreasy
			</p>
			<p className="text-5xl text-gray-800 font-poppins my-4 md:text-2xl">
				get your qr in{" "}
				<TypeWriter
					text={home_text}
					delay={200}
					className={"text-purple-800"}
					infinite
				/>
			</p>
			<button
				type="button"
				className="my-4 p-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 w-36 font-bold md: w-28"
				onClick={handleRedirect}
			>
				Get started
				<span className="mx-2">
					<FontAwesomeIcon icon={faAngleRight} />
				</span>
			</button>
		</div>
	);
};

export default Home;
