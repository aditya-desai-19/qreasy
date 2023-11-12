import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const App = lazy(() => import("../App"));
const Home = lazy(() => import("../containers/Home"));
const MainBody = lazy(() => import("../containers/MainBody"));

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/generate-qr",
				element: <MainBody />,
			},
		],
	},
	{
		path: "*",
		element: <span>Some error occured!! Check path url..</span>,
	},
]);

export default Routes;
