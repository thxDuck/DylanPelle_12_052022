import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
import "./styles/style.css";

import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Main />
		</BrowserRouter>
	);
}

export default App;
