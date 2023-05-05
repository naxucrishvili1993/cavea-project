import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AddProduct from "./AddProduct/AddProduct";

const Middle = () => {
	window.location.href === "http://localhost:3000/" &&
		window.location.replace("http://localhost:3000/inventories");

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
