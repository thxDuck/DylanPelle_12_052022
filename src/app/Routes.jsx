import { Routes, Route } from "react-router-dom";
import Main from "../components/pages/Main";
import SelectUser from "../components/pages/SelectUser";

function RoutesApp() {
	return (
		<Routes>
			<Route path="/:id" element={<Main />} />
			<Route index={true} path="/" element={<SelectUser />} />
		</Routes>
	);
}

export default RoutesApp;
