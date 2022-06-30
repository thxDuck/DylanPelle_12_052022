import { Routes, Route } from "react-router-dom";
import Main from "../components/pages/Main";
import Error from "../components/pages/Error";
import ERRORS from "../services/errors";
import SelectUser from "../components/pages/SelectUser";

function RoutesApp() {
	return (
		<Routes>
			<Route path="/:id" element={<Main />} />
			<Route index={true} path="/" element={<SelectUser />} />
			<Route path="*" element={<Error error={ERRORS.PAGE_NOT_EXIST} />} />
		</Routes>
	);
}

export default RoutesApp;
