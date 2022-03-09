import React, { useEffect, useState } from "react";
import { Counter } from "./counter.jsx";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const id = setInterval(
			() => setCount((oldCount) => oldCount + 1),
			1000
		);

		return () => {
			clearInterval(id);
		};
	}, []);
	let hundredofthousand = Math.round((count % 1000000) / 100000);
	let tensofthousand = Math.round((count % 100000) / 10000);
	let thousand = Math.round((count % 10000) / 1000);
	let hundred = Math.round((count % 1000) / 100);
	let tens = Math.round((count % 100) / 10);
	let seconds = Math.round(count % 10);
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
		</div>
	);
};

export default Home;
