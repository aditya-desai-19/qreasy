import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleClick = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className="shadow-lg">
			<div className="bg-purple-500 h-12 flex justify-between items-center text-white shadow-lg p-2 border-b-2 border-gray-300">
				<p className="text-2xl font-bold ml-10">qreasy</p>
				<ul className="flex mr-10  max-[426px]:hidden">
					<Link to={"/"}>
						<li className="mx-4 text-lg font-bold ">Home</li>
					</Link>
					<Link to={"/generate-qr"}>
						<li className="mx-4 text-lg font-bold ">Generate Qr</li>
					</Link>
					<li className="mx-4 text-lg font-bold">
						<FontAwesomeIcon icon={faSun} />
					</li>
				</ul>
				<button
					className="mr-5 text-lg min-[426px]:hidden"
					onClick={handleClick}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>
			{showMenu && (
				<div className="bg-purple-500 text-white min-[426px]:hidden">
					<ul className="flex flex-col">
						<Link to={"/"}>
							<li className="ml-10 py-2 text-lg font-bold ">
								Home
							</li>
						</Link>
						<Link to={"/generate-qr"}>
							<li className="ml-10 py-2 text-lg font-bold ">
								Generate Qr
							</li>
						</Link>
						<li className="ml-10 py-2 text-lg font-bold">
							<FontAwesomeIcon icon={faSun} />
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Navbar;
