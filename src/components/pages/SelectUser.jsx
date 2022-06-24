import React from "react";
import { Link } from "react-router-dom";

const SelectUser = () => {
	return (
		<main>
			<div
				style={{
					fontSize: "1.5rem",
					fontWeight: "500",
				}}>
				<p>Séléctionnez un utilisateur :</p>
				<ul
					style={{
						paddingLeft: "25px",
						fontSize: "1rem",
						textDecoration: "underline",
						// margin: "auto",
					}}>
					<li>
						<Link to="/12">12</Link>
					</li>
					<li>
						<Link to="/18">18</Link>
					</li>

					<li>
						<Link to="/1">1 (utilisateur avec données manquantes)</Link>
					</li>
				</ul>
			</div>
		</main>
	);
};

export default SelectUser;
