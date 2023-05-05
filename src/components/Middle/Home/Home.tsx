import { useEffect, useRef, useState } from "react";
import AxiosFunctions from "../../../AxiosFunctions/AxiosFunctions";
import Inventory from "./Inventory/Inventory";
import { useDispatch, useSelector } from "react-redux";
import { setInventory } from "../../Store/Features/inventorySlice";
import { RootState } from "../../Store/store";
import Pagination from "../../Pagination/Pagination";
import Sort from "./Sort/Sort";
import Filter from "./Filter/Filter";
const axiosFunctions = new AxiosFunctions();

type TInventory = {
	item_id: number;
	item_name: string;
	item_price: number;
	item_location: string;
};

const Home = () => {
	const dispatch = useDispatch();
	const inventory = useSelector(
		(state: RootState) => state.inventoryReducer.inventories[0],
	);
	const activePageIndex = useSelector(
		(state: RootState) => state.pageReducer.activePageIndex,
	);
	const sortName = useSelector(
		(state: RootState) => state.paramsReducer.sortName,
	);
	const sortPrice = useSelector(
		(state: RootState) => state.paramsReducer.sortPrice,
	);
	const location = useSelector(
		(state: RootState) => state.paramsReducer.location,
	);

	// Sending request to the server when user requests for different kind of sorting/filtering
	useEffect(() => {
		axiosFunctions
			.getInventory(sortName, sortPrice, location)
			.then((response) => {
				dispatch(setInventory(response.data));
			})
			.catch((err) => console.log(err));
	}, [sortName, sortPrice, location]);
	return (
		<>
			<div className="container d-flex justify-content-between align-items-center my-4">
				<Filter />
				<Sort />
			</div>
			<div className="container mt-3">
				<div className="row align-items-center">
					<div className="col">Name</div>
					<div className="col">Price</div>
					<div className="col">Location</div>
					<div className="col text-end">
						<a href="/add">
							<button type="button" className="btn btn-primary">
								Add Item
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className="container mt-5">
				{Array.isArray(inventory) ? (
					/* slice მეთოდის საშუალებით ვარენდერებთ მხოლოდ 20 მონაცემს.
                  activePageIndex ცვლადზე დაყრდნობით კი ვსაზღვრავთ თუ რომელი
                  20 მონაცემი უნდა გამოვიტანოთ */
					inventory
						.slice(20 * (activePageIndex - 1), 20 * activePageIndex)
						.map((el: TInventory, index: number) => (
							<Inventory key={index} {...el} />
						))
				) : (
					<p>Loading...</p>
				)}
				{Array.isArray(inventory) && <Pagination />}
			</div>
		</>
	);
};

export default Home;
