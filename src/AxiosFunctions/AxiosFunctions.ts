import axios from "axios";

class AxiosFunctions {
	getInventory(sortName: number, sortPrice: number, location: string) {
		return axios.get("https://cavea-server.onrender.com/inventories", {
			params: {
				name: sortName,
				price: sortPrice,
				location: location,
			},
		});
	}
}

export default AxiosFunctions;
