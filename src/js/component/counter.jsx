import propTypes from "prop-types";
import React from "react";
export function Counter(props) {
	return (
		<div className="container-fluid caja">
			<div>
				<span>
					<i className="fa-solid fa-clock-nine"></i>
				</span>
			</div>
			<div>{props.hundredofthousand}</div>
			<div>{props.tensofthousand}</div>
			<div>{props.thousand}</div>
			<div>{props.hundred}</div>
			<div>{props.tens}</div>
			<div>{props.seconds}</div>
		</div>
	);
}
