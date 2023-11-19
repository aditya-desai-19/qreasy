import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
const App = lazy(() => import("./App"));
const Home = lazy(() => import("./containers/Home"));
const MainBody = lazy(() => import("./containers/MainBody"));

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
	<Suspense fallback={<span>Loading...</span>}>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="generate-qr" element={<MainBody />} />
					<Route
						path="*"
						element={<span>Some error occured!! Check url</span>}
					/>
				</Route>
			</Routes>
		</HashRouter>
	</Suspense>
);
