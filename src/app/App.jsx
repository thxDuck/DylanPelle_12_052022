import Modal from "../components/partials/Modal";
import Nav from "../components/partials/header/Nav";

import "../styles/style.css";
import RoutesApp from "./Routes";

import { BrowserRouter } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<RoutesApp />
			<Nav />
			<Modal />
		</BrowserRouter>
	);
};

export default App;
