import React from "react";
import PropTypes from "prop-types";

const Error = (props) => {
    // Error must contains an error code and a message in user language
    const error = props.error;
    return (
        <main className="error">
            <p>
                {error.msg}
                <small>(code : {error.code})</small>
            </p>
        </main>
    );
};

export default Error;

Error.propTypes = {
    error: PropTypes.exact({
        msg: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
    }),
};
