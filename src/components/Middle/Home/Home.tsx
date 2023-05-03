import { useEffect, useState, useRef } from "react";
import AxiosFunctions from "../../../AxiosFunctions/AxiosFunctions";
import Inventory from "./Inventory/Inventory";
const axiosFunctions = new AxiosFunctions();

type TInventory = {
	name: string;
	price: number;
	location: string;
	id: number;
};

const Home = () => {
	const [inventories, setInventories] = useState<TInventory[]>([]);

	useEffect(() => {
		axiosFunctions
			.getInventory()
			.then((response) => setInventories([response.data]))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<div className="container mt-3">
				<div className="row align-items-center">
					<div className="col">Location</div>
					<div className="col">Name</div>
					<div className="col">Price</div>
					<div className="col text-end">
						<button type="button" className="btn btn-primary">
							Add Item
						</button>
					</div>
				</div>
			</div>
			<div className="container mt-5">
				{inventories &&
					inventories.map((el, index) => <Inventory key={index} {...el} />)}
			</div>
		</>
	);
};

export default Home;
