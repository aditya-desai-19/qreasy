import React, { lazy, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useCurrentTheme from "./utils/useCurrentTheme";
const Navbar = lazy(() => import("./containers/Navbar"));

const App = () => {
	useEffect(() => {
		const currentTheme = useCurrentTheme();
		document.body.className = currentTheme;
	}, []);

	return (
		<div className="h-screen w-screen bg-primary-background-color">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default App;
