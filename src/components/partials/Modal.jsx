import React from "react";

/**
 * This function is used to close the modal.
 */
const closeModal = () => {
    document.getElementById("modal").style.display = "none";
};

/**
 * Modal used to display information to user.
 * To add a message and display the modal, call displayMessageInModal function in "/src/services/utils.js"
 * @component
 * @returns {React.FunctionComponent} - Modal component used to display information to user.
 */
const Modal = () => {
    return (
        <div id="modal">
            <div className="modal-content">
                <div className="modal-body">
                    <h2 className="title">Erreur</h2>
                    <div className="content"></div>
                    <div className="modal-footer">
                        <button className="closeModal" onClick={closeModal}>
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;
