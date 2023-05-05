import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSortName, setSortPrice } from "../../../Store/Features/paramsSlice";

const Sort = () => {
	const dispatch = useDispatch();
	const [sortByName, setSortByName] = useState<number>(1);
	const [sortByPrice, setSortByPrice] = useState<number>(0);

	function handleNameClick() {
		sortByName === 1 ? setSortByName(0) : setSortByName(1);
		if (sortByName === 1) {
			setSortByName(0);
			dispatch(setSortName(0));
		} else {
			setSortByName(1);
			dispatch(setSortName(1));
		}
	}
	function handlePriceClick() {
		sortByPrice === 1 ? setSortByPrice(0) : setSortByPrice(1);
		if (sortByPrice === 1) {
			setSortByPrice(0);
			dispatch(setSortPrice(0));
		} else {
			setSortByPrice(1);
			dispatch(setSortPrice(1));
		}
	}

	/* Checking the request by the user to see what type of sorting he wants and send the request to the server accordingly */

	return (
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
	);
};

export default Sort;
