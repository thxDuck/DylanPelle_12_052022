import React from "react";

import zen from "../../../assets/images/icons/zen.svg";
import swim from "../../../assets/images/icons/swim.svg";
import cycling from "../../../assets/images/icons/cycling.svg";
import strong from "../../../assets/images/icons/strong.svg";

const VerticalNav = () => {
	return (
		<div className="navbar-left">
			<div className="navbar-left__activities">
				<ul>
					<li>
						<a href="/Zen">
							<img src={zen} alt="" />
						</a>
					</li>
					<li>
						<a href="/Natation">
							<img src={swim} alt="" />
						</a>
					</li>
					<li>
						<a href="/Vélo">
							<img src={cycling} alt="" />
						</a>
					</li>
					<li>
						<a href="/Haltères">
							<img src={strong} alt="" />
						</a>
					</li>
				</ul>
			</div>
			<p className="copyright">Copiryght, SportSee 2020</p>
		</div>
	);
};

export default VerticalNav;
