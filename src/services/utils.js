import mocks from "./Mocks";

/**
 * Utils contains all utility functions, variables that are used in the app.
 * To use these functions, import this file and call Utils.functionName().
 */
const utils = {
    /**
     * Empty modal if you want, put a message and display modal.
     * 
     * @param {String} message - The message to add in the modal
     * @param {Boolean} emptyFirst - If the modal need to be empty or not
     */
    displayMessageInModal: (message, emptyFirst = false) => {
        const modal = document.getElementById("modal");
        const modalContent = document.querySelector("#modal .content");
        if (emptyFirst) modalContent.innerHTML = "";

        const p = document.createElement("p");
        p.textContent = message;
        modalContent.appendChild(p);

        if (modal.style.display === "flex") return
        else modal.style.display = "flex";
    },
    mocks: mocks,
}

export default utils;