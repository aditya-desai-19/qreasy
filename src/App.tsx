import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
const Navbar = lazy(() => import("./containers/Navbar"));

const App = () => {
	return (
		<div className="h-screen w-screen bg-gray-100">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default App;
