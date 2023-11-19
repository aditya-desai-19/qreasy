import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import useCurrentTheme from "../utils/useCurrentTheme";

const Navbar = () => {
	const [theme, setTheme] = useState<string>("");
	const [showMenu, setShowMenu] = useState<boolean>(false);

	useEffect(() => {
		const currentTheme = useCurrentTheme();
		setTheme(currentTheme);
	}, []);

	const handleClick = () => {
		setShowMenu(!showMenu);
	};

	const changeTheme = () => {
		if (theme === "dark") {
			document.body.className = "light";
			setTheme("light");
		} else {
			document.body.className = "dark";
			setTheme("dark");
		}
	};

	const changeThemeForSmallerDevices = () => {
		changeTheme();
		handleClick();
	};

	return (
		<div className="shadow-lg">
			<div className="bg-primary-color h-12 flex justify-between items-center text-nav-text-color shadow-lg p-2 ">
				<p className="text-2xl font-bold ml-10">qreasy</p>
				<ul className="flex mr-10  max-[426px]:hidden">
					<Link to={"/"}>
						<li className="mx-4 text-lg font-bold ">Home</li>
					</Link>
					<Link to={"/generate-qr"}>
						<li className="mx-4 text-lg font-bold ">Generate Qr</li>
					</Link>
					<li
						className="mx-4 text-lg font-bold cursor-pointer"
						onClick={changeTheme}
					>
						<FontAwesomeIcon
							icon={theme === "light" ? faSun : faMoon}
						/>
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
				<div className="bg-primary-color text-nav-text-color border-t-2 border-nav-text-color min-[426px]:hidden">
					<ul className="flex flex-col">
						<Link to={"/"} onClick={handleClick}>
							<li className="ml-10 py-2 text-lg font-bold ">
								Home
							</li>
						</Link>
						<Link to={"/generate-qr"} onClick={handleClick}>
							<li className="ml-10 py-2 text-lg font-bold ">
								Generate Qr
							</li>
						</Link>
						<li
							className="ml-10 py-2 text-lg font-bold cursor-pointer"
							onClick={changeThemeForSmallerDevices}
						>
							<FontAwesomeIcon
								icon={theme === "light" ? faSun : faMoon}
							/>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Navbar;
