import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Error from "./Error.jsx";

//<Route path="/" element={<Main />} />
// <Route path="*" element={<Main />} />
function RoutesApp() {
	return (
		<Routes>
			<Route path="/user/:id" element={<Main />} />
			<Route path="/error" element={<Error />} />
		</Routes>
	);
}

export default RoutesApp;
