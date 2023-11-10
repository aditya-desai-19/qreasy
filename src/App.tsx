import React, { lazy } from "react";
const Navbar = lazy(() => import("./containers/Navbar"));
const MainBody = lazy(() => import("./containers/MainBody"));

const App = () => {
	return (
		<div>
			<Navbar />
			<MainBody />
		</div>
	);
};

export default App;
