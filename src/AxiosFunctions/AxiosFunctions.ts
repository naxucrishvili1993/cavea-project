import axios from "axios";

class AxiosFunctions {
	getInventory() {
		return axios.get("/inventories");
	}
	sortByName() {
		return axios.get("./inventories", {
			params: {
				name: 1,
			},
		});
	}
	sortByPrice() {
		return axios.get("./inventories", {
			params: {
				price: 1,
			},
		});
	}
	sortByNameAndPrice() {
		return axios.get("./inventories", {
			params: {
				name: 1,
				price: 1,
			},
		});
	}
	filterByLocation(location: string) {
		return axios.get("/inventories", {
			params: {
				location: location,
			},
		});
	}
}

export default AxiosFunctions;
