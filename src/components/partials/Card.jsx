import React from "react";

const Card = (props) => {
	const icon = props.icon;
	const value = props.value;
	const title = props.title;
	const unit = props.unit;
	const id = props.id;
	return (
		<div className="card" id={id}>
			<div className="card__icon">
				<img src={icon} alt="" />
			</div>
			<div className="card__text">
				<p className="card__text--val">{`${value}${unit}`}</p>
				<p className="card__text--title">{title}</p>
			</div>
		</div>
	);
};
export default Card;
