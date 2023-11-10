import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<div className="bg-purple-500 h-12 flex justify-between items-center text-white shadow-lg p-2">
			<p className="text-2xl font-bold ml-10">qreasy</p>
			<ul className="flex mr-10">
				<li className="mx-4 text-lg">Home</li>
				<li className="mx-4 text-lg">About</li>
				<li className="mx-4 text-lg">
					<FontAwesomeIcon icon={faSun} />
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
