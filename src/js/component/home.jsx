import React, { useEffect, useState } from "react";
import { Counter } from "./counter.jsx";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);
	const [hundredofthousand, set10e5] = useState(0);
	const [tensofthousand, set10e4] = useState(0);
	const [thousand, set10e3] = useState(0);
	const [hundred, set10e2] = useState(0);
	const [tens, set10e1] = useState(0);
	const [seconds, set10e0] = useState(0);
	const [countdown, setCountdown] = useState(false);
	const [start, setOn] = useState(true);
	const [alertTime, setAlert] = useState(-1);
	const [timer, setTimer] = useState(0);
	const [dummy, setDummy] = useState(0);
	useEffect(() => {
		const counter = setInterval(() => {
			if (start) {
				if (countdown) {
					setCount(count - 1);
					if (count <= 2) {
						setOn(false);
						console.log;
					}
				} else {
					setCount(count + 1);
				}
				if (count == alertTime) {
					alert("time was reached");
				}
			}
			updateNumbers();
			clearInterval(counter);
			setDummy(dummy + 1);
			console.log(count);
		}, 100);
	}, [count, dummy]);
	function updateNumbers() {
		set10e5(Math.floor((count % 1000000) / 100000));
		set10e4(Math.floor((count % 100000) / 10000));
		set10e3(Math.floor((count % 10000) / 1000));
		set10e2(Math.floor((count % 1000) / 100));
		set10e1(Math.floor((count % 100) / 10));
		set10e0(Math.floor(count % 10));
	}
	return (
		<div>
			<Counter
				seconds={seconds}
				tens={tens}
				hundred={hundred}
				thousand={thousand}
				tensofthousand={tensofthousand}
				hundredofthousand={hundredofthousand}
			/>
			<div className="text-center my-3">
				<form>
					<label>Countdown-seconds:</label>
					<input
						className="form-label mx-3"
						type="number"
						onChange={(e) => {
							setTimer(e.target.value);
						}}></input>
					<button
						type="button"
						className="btn btn-dark"
						onClick={() =>
							countdown
								? setCountdown(false)
								: (setCountdown(true), setCount(timer))
						}>
						{countdown ? "Normal Count" : "Countdown"}
					</button>
				</form>
			</div>
			<div className="text-center text-warning">
				<p>To contdown or reset, counter must be stopped</p>
			</div>
			<div className="row">
				<div className="col text-center"></div>
				<div className="col text-center">
					<button
						type="button"
						className={
							start ? "btn btn-success mx-3" : "btn btn-dark mx-3"
						}
						onClick={() => {
							setOn(true);
						}}>
						Start
					</button>
					<button
						type="button"
						className={
							start ? "btn btn-dark mx-3" : "btn btn-success mx-3"
						}
						onClick={() => {
							setOn(false);
						}}>
						Stop
					</button>
					<button
						type="button"
						className="btn btn-dark mx-3"
						onClick={() => {
							setCount(0);
						}}>
						Reset
					</button>
				</div>
				<div className="col"></div>
				<div className="text-center my-4">
					<form>
						<label>Alert at second:</label>
						<input
							className="form-label mx-3"
							type="number"
							onChange={(e) => setAlert(e.target.value)}></input>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;
