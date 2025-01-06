const StarshipRacer = ({ racers }) => {
	// variables to be filled below
	let atmosWinner = "N/A";
	let vacuumWinner = "N/A";
	let hyperWinner = "N/A";

	try {
		// atmospheric speeds (convert NaN to 0)
		const atmosSpeeds = racers.map((racer) => {
			const speed = parseFloat(racer.max_atmosphering_speed);
			return isNaN(speed) ? 0 : speed;
		});

		// vacuum sub-light speeds (convert NaN to 0)
		const vacuumSpeeds = racers.map((racer) => {
			const speed = parseFloat(racer.MGLT);
			return isNaN(speed) ? 0 : speed;
		});

		// vacuum light speeds (convert NaN to 20, lower is faster)
		const hyperSpeeds = racers.map((racer) => {
			const speed = parseFloat(racer.hyperdrive_rating);
			return isNaN(speed) ? 20 : speed;
		});

		const compareSpeeds = () => {
			// determines atmospheric speed winner
			if (atmosSpeeds[0] === atmosSpeeds[1]) {
				atmosWinner = "It's a tie!";
			} else if (atmosSpeeds[0] > atmosSpeeds[1]) {
				atmosWinner = racers[0].name;
			} else {
				atmosWinner = racers[1].name;
			}

			// determines vacuum sub-light speed winner
			if (vacuumSpeeds[0] === vacuumSpeeds[1]) {
				vacuumWinner = "It's a tie!";
			} else if (vacuumSpeeds[0] > vacuumSpeeds[1]) {
				vacuumWinner = racers[0].name;
			} else {
				vacuumWinner = racers[1].name;
			}

			// determines vacuum light speed winner
			if (hyperSpeeds[0] === hyperSpeeds[1]) {
				hyperWinner = "It's a tie!";
			} else if (hyperSpeeds[0] < hyperSpeeds[1]) {
				hyperWinner = racers[0].name;
			} else {
				hyperWinner = racers[1].name;
			}
		};

		compareSpeeds();
	} catch {
		console.log("Racers not yet selected!");
	}

	return (
		<div id="race">
			<div>
				<h2>Racer A:</h2>
				{racers[0].name}
			</div>
			<div>
				<h2>Racer B:</h2>
				{racers[1].name}
			</div>
			<div>
				<h2>Who Would Win?</h2>
				<h3>In Atmospere:</h3>
				<p>{atmosWinner}</p>
				<h3>In Vacuum:</h3>
				<p>{vacuumWinner}</p>
				<h3>In Hyperspace:</h3>
				<p>{hyperWinner}</p>
			</div>
		</div>
	);
};

export default StarshipRacer;