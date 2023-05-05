import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInventory } from "../../Store/Features/inventorySlice";
import AxiosFunctions from "../../../AxiosFunctions/AxiosFunctions";
const axiosFunctions = new AxiosFunctions();

const FilterForm = () => {
	const dispatch = useDispatch();
	const [sortByName, setSortByName] = useState<number>(1);
	const [sortByPrice, setSortByPrice] = useState<number>(0);

	function handleNameClick() {
		sortByName === 1 ? setSortByName(0) : setSortByName(1);
	}
	function handlePriceClick() {
		sortByPrice === 1 ? setSortByPrice(0) : setSortByPrice(1);
	}

	/* Checking the request by the user to see what type of sorting he wants and send the request to the server accordingly */
	useEffect(() => {
		sortByName === 1 &&
			axiosFunctions
				.sortByName()
				.then((response) => dispatch(setInventory(response.data)));
		sortByPrice === 1 &&
			axiosFunctions
				.sortByPrice()
				.then((response) => dispatch(setInventory(response.data)));
		sortByName === 1 &&
			sortByPrice === 1 &&
			axiosFunctions
				.sortByNameAndPrice()
				.then((response) => dispatch(setInventory(response.data)));
	}, [sortByName, sortByPrice]);

	return (
		<div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value={sortByName}
					id="flexCheckIndeterminate"
					name="sort_by_name"
					checked={Boolean(sortByName)}
					onChange={handleNameClick}
				/>
				<label className="form-check-label" htmlFor="flexCheckIndeterminate">
					Sort by name
				</label>
				<div>
					<input
						className="form-check-input"
						type="checkbox"
						defaultValue={sortByPrice}
						id="flexCheckIndeterminate1"
						name="sort_by_price"
						defaultChecked={Boolean(sortByPrice)}
						onChange={handlePriceClick}
					/>
					<label className="form-check-label" htmlFor="flexCheckIndeterminate1">
						Sort by price
					</label>
				</div>
			</div>
		</div>
	);
};

export default FilterForm;
