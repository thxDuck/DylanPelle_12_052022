import Nav from "./Nav.jsx";
import Main from "./Main.jsx";
import "../styles/style.css";
import RoutesApp from "./Routes";

import { BrowserRouter } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<RoutesApp />
			<Main />
		</BrowserRouter>
	);
}

export default App;
