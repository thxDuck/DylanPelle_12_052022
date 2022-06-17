import { Routes, Route } from "react-router-dom";
import Main from "./Main";

//<Route path="/" element={<Main />} />
// <Route path="*" element={<Main />} />
function RoutesApp() {
	return (
		<Routes>
			<Route path="/user/:id" element={<Main />} />
		</Routes>
	);
}

export default RoutesApp;
