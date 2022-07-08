import React from "react";
import PropTypes from "prop-types";

/**
 * This is error page. Pass error code and error message to display error to user.
 *
 * @param {string} message - The error message.
 * @param {string} code - The error code.
 * @returns {React.FunctionComponent} - Error page with a message and a code.
 */
const Error = (props) => {
    // Error must contains an error code and a message in user language
    const message = props.msg || "Une erreur est survenue";
    const code = props.code || "0x000";
    return (
        <main className="error">
            <p>
                {message}
                <small>(code : {code})</small>
            </p>
        </main>
    );
};

export default Error;

Error.propTypes = {
    msg: PropTypes.string,
    code: PropTypes.string,
};
