import { Routes, Route } from "react-router-dom";
import Main from "../components/pages/Main";
import Error from "../components/pages/Error";

function RoutesApp() {
	return (
		<Routes>
			<Route path="/dashboard/:id" element={<Main />} />
			<Route index={true} path="/" element={<Main />} />
			<Route path="/error" element={<Error />} />
		</Routes>
	);
}

export default RoutesApp;
