import mocks from "./mocks";

/**
 * Utils contains all utilities functions, variables that are used in the app.
 * 
 */
const utils = {
    /**
     * Empty modal if you want, put message and display modal.
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