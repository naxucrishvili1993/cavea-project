import axios from "axios";

class AxiosFunctions {
	getInventory(sortName: number, sortPrice: number, location: string) {
		return axios.get("/inventories", {
			params: {
				name: sortName,
				price: sortPrice,
				location: location,
			},
		});
	}
}

export default AxiosFunctions;
