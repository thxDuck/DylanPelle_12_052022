import React from "react";

const closeModal = () => {
	document.getElementById("modal").style.display = "none";
};

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
