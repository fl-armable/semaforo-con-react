import React from 'react';
import PropTypes from 'prop-types';

const Semaforo = (props) => {
	return (
        <div className="caja">
            <div className={`red light ${props.color === "red" ? "active" : ""}`}></div>
            <div className={`yellow light ${props.color === "yellow" ? "active" : ""}`}></div>
            <div className={`green light ${props.color === "green" ? "active" : ""}`}></div>
        </div>
	);
};

Semaforo.propTypes = {
	color: PropTypes.string
};

export default Semaforo;