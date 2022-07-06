import React from "react";
import PropTypes from "prop-types";


/**
 * Display nutriment informations with correct icon and color.
 * @returns {React.FunctionComponent} - Nutriment card.
 */
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
Card.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
};
export default Card;
