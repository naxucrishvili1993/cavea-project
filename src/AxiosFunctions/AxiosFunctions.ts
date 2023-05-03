import axios from "axios";

class AxiosFunctions {
	getInventory() {
		return axios.get("/inventories");
	}
}

export default AxiosFunctions;
