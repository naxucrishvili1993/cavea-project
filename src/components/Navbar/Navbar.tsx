import { useDispatch } from "react-redux";
import AxiosFunctions from "../../AxiosFunctions/AxiosFunctions";
import CaveaLogo from "../../images/cavea-logo.jpg";
import Filter from "./Filter/Filter";
import { useEffect, useState } from "react";
import { setInventory } from "../Store/Features/inventorySlice";
const axiosFunctions = new AxiosFunctions();
const Navbar = () => {
	const [location, setLocation] = useState<string>("All");
	const dispatch = useDispatch();

	function handleLocationChange(
		event: React.ChangeEvent<HTMLSelectElement>,
	): void {
		setLocation(event.currentTarget.value);
	}
	useEffect(() => {
		axiosFunctions
			.filterByLocation(location)
			.then((result) => dispatch(setInventory(result.data)));
	});

	return (
		<nav className="navbar d-flex justify-content-between p-2 bg-body-tertiary">
			<div className="container m-0 w-25">
				<a
					className="navbar-brand w-25"
					href="https://www.cavea.ge/"
					target="blank"
				>
					<img
						src={CaveaLogo}
						alt="Logo"
						width="225"
						height="56"
						className="d-inline-block align-text-top"
					/>
				</a>
			</div>
			<Filter />
			<div className="container">
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
		</nav>
	);
};

export default Navbar;
