import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<div className="bg-purple-500 h-12 flex justify-between items-center text-white shadow-lg p-2">
			<p className="text-2xl font-bold ml-10">qreasy</p>
			<ul className="flex mr-10">
				<Link to={"/"}>
					<li className="mx-4 text-lg font-bold">Home</li>
				</Link>
				<Link to={"/generate-qr"}>
					<li className="mx-4 text-lg font-bold">Generate Qr</li>
				</Link>
				<li className="mx-4 text-lg font-bold">
					<FontAwesomeIcon icon={faSun} />
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
