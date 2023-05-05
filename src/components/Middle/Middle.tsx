import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AddProduct from "./AddProduct/AddProduct";

const Middle = () => {
	window.location.href === "https://cavea-project.vercel.app/" &&
		window.location.replace("https://cavea-project.vercel.app/inventories");

	return (
		<>
			<Routes>
				<Route path="/inventories" element={<Home />} />
				<Route path="/add" element={<AddProduct />} />
			</Routes>
		</>
	);
};

export default Middle;
