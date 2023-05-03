import Navbar from "./components/Navbar/Navbar";
import Middle from "./components/Middle/Middle";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/inventories");
	}, []);
	return (
		<>
			<Navbar />
			<Middle />
		</>
	);
};

export default App;
