import Nav from "./Nav.jsx";
import Main from "./Main.jsx";
import "../styles/style.css";
import { useParams, useNavigate } from "react-router-dom";
import RoutesApp from "./Routes";

import { BrowserRouter } from "react-router-dom";

const App = () => {
	const params = useParams();
	const userId = params.id;
	console.log('userId => ', userId);
	
	return (
		<BrowserRouter>
			<Nav />
			<RoutesApp />
			<Main userId={userId} />
		</BrowserRouter>
	);
}

export default App;
