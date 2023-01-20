import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
const App = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path=":code" element={<Dashboard />} />
				</Route>
			</Routes>
		</main>
	);
};

export default App;
