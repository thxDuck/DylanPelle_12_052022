import { Routes, Route } from "react-router-dom";
import Main from "../components/pages/Main";
import Error from "../components/pages/Error";
import ERRORS from "../services/errors";
import SelectUser from "../components/pages/SelectUser";

/**
 *
 * @description This is the routes for the app. Allowed routes are : ["", "/", "/${userId}"].
 */
function RoutesApp() {
    return (
        <Routes>
            <Route path="/:id" element={<Main />} />
            <Route index={true} path="/" element={<SelectUser />} />
            <Route path="*" element={<Error msg={ERRORS.PAGE_NOT_EXIST.msg} code={ERRORS.PAGE_NOT_EXIST.code} />} />
        </Routes>
    );
}

export default RoutesApp;
