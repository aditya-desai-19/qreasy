import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Route";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
	<Suspense fallback={<span>Loading...</span>}>
		<RouterProvider router={Routes} />
	</Suspense>
);
