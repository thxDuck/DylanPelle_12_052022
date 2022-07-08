import Modal from "../components/partials/Modal";
import Nav from "../components/partials/header/Nav";

import "../styles/style.css";
import RoutesApp from "./Routes";

import { BrowserRouter } from "react-router-dom";

/**
 * App component contains the entire application with the router. Minimal components needed are the nav bars and the modal.
 * @returns {React.FunctionComponent}
 */
const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <RoutesApp />
            <Modal />
        </BrowserRouter>
    );
};

export default App;
