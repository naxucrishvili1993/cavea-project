import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

const Middle = () => {
	return (
		<>
			<Routes>
				<Route path="/inventories" element={<Home />} />
			</Routes>
		</>
	);
};

export default Middle;
