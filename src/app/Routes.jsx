import { Routes, Route } from "react-router-dom";
import SelectUser from "../components/pages/SelectUser";
import Error from "../components/pages/Error";
import Main from "../components/pages/Main";

import ERRORS from "../services/errors";

/**
 *
 * This is the routes for the app. Allowed routes are : ["", "/", "/${userId}"].
 * @returns {React-Router-Dom} Router component with all routes.
 */
const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/:id" element={<Main />} />
            <Route index={true} path="/" element={<SelectUser />} />
            <Route path="*" element={<Error msg={ERRORS.PAGE_NOT_EXIST.msg} code={ERRORS.PAGE_NOT_EXIST.code} />} />
        </Routes>
    );
}

export default RoutesApp;
