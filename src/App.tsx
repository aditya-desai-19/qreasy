import React, { lazy } from "react";
const Navbar = lazy(() => import("./components/Navbar"));
const MainBody = lazy(() => import("./components/MainBody"));

const App = () => {
	return (
		<div className="flex flex-col justify-center">
			<Navbar />
			{/* <MainBody /> */}
		</div>
	);
};

export default App;
