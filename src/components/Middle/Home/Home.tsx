import { useEffect, useRef } from "react";
import AxiosFunctions from "../../../AxiosFunctions/AxiosFunctions";
import Inventory from "./Inventory/Inventory";
import { useDispatch, useSelector } from "react-redux";
import { setInventory } from "../../Store/Features/inventorySlice";
import { RootState } from "../../Store/store";
const axiosFunctions = new AxiosFunctions();

type TInventory = {
	id: number;
	name: string;
	price: number;
	location: string;
};

const Home = () => {
	const dispatch = useDispatch();
	const firstRender = useRef<boolean>(true);
	const inventory = useSelector(
		(state: RootState) => state.inventoryReducer.inventories[0],
	);
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			axiosFunctions
				.getInventory()
				.then((response) => {
					dispatch(setInventory(response.data));
				})
				.catch((err) => console.log(err));
		}
	}, []);
	return (
		<>
			<div className="container mt-3">
				<div className="row align-items-center">
					<div className="col">Name</div>
					<div className="col">Price</div>
					<div className="col">Location</div>
					<div className="col text-end">
						<button type="button" className="btn btn-primary">
							Add Item
						</button>
					</div>
				</div>
			</div>
			<div className="container mt-5">
				{Array.isArray(inventory) &&
					inventory.map((el: TInventory, index: number) => (
						<Inventory key={index} {...el} />
					))}
			</div>
		</>
	);
};

export default Home;
