import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import { Navigate } from "react-router-dom";

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
