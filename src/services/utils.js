import mocks from "./mocks";


const utils = {
    mocks: mocks,
    displayMessageInModal: (message, emptyFirst = false) => {
        const modal = document.getElementById("modal");
        const modalContent = document.querySelector("#modal .content");

        if (emptyFirst) modalContent.innerHTML = "";

        const p = document.createElement("p");
        p.textContent = message;
        modalContent.appendChild(p);
        modal.style.display = "flex";
    },
}

export default utils;