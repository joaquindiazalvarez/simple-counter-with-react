import propTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from "@fortawesome/free-solid-svg-icons";
export function Counter(props) {
	return (
		<div className="container-fluid caja">
			<div>
				<span>
					<FontAwesomeIcon icon={faClockFour} />
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
