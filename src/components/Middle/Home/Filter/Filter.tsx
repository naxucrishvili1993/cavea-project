import React from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../Store/Features/paramsSlice";

const Filter = () => {
	const dispatch = useDispatch();

	function handleLocationChange(
		event: React.ChangeEvent<HTMLSelectElement>,
	): void {
		dispatch(setLocation(String(event.currentTarget.value)));
	}

	return (
		<div>
			<label>
				Filter by Location:
				<select
					defaultValue="All"
					onChange={handleLocationChange}
					className="form-select form-select-sm"
					aria-label="Default select example"
				>
					<option value="All">All</option>
					<option value="Main Office">Main Office</option>
					<option value="Cavea Gallery">Cavea Gallery</option>
					<option value="Cavea Tbilisi Mall">Cavea Tbilisi Mall</option>
					<option value="Cavea East Point">Cavea East Point</option>
					<option value="Cavea City Mall">Cavea City Mall</option>
				</select>
			</label>
		</div>
	);
};

export default Filter;
