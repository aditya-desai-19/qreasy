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
		<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-2/3">
			<p className="lg:text-6xl text-gray-800 font-poppins my-4 font-bold md:text-4xl min-[375px]:text-2xl min-[320px]:text-xl">
				Welcome to qreasy
			</p>
			<p className="lg:text-5xl text-gray-800 font-poppins my-4 md:text-2xl min-[375px]:text-lg">
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
				className="my-4 p-2 bg-purple-600 rounded-2xl text-white hover:bg-purple-700 lg:w-36 font-bold md:w-32 max-[320px]:w-28 max-[320px]:text-sm"
				onClick={handleRedirect}
			>
				Get started
				<span className="mx-2 max-[320px]:mx-1">
					<FontAwesomeIcon icon={faAngleRight} />
				</span>
			</button>
		</div>
	);
};

export default Home;
