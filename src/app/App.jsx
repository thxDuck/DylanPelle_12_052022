import Nav from "../components/partials/header/Nav";
import Main from "../components/pages/Main";

import "../styles/style.css";
import RoutesApp from "./Routes";

import { BrowserRouter } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<RoutesApp />
			<Nav />
			<Main />
		</BrowserRouter>
	);
};

export default App;
