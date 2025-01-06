import { useState } from "react";
import StarshipList from "./components/StarshipList";
import StarshipRacer from "./components/StarshipRacer";

const App = () => {
	
	const [racers, setRacers] = useState([
		{ name: "None Selected" },
		{ name: "None Selected" },
	]);

	return (
		<body>
			<h1>Star Wars Battleship Racer</h1>
			<p>Welcome! Please use the Starship Database on the left (powered by <a href="https://swapi.dev/">Star Wars API</a>) to search for ship info and set your racers. Check the Racing Calculator to the right for results! </p>
			<div id="app">
				<StarshipList racers={racers} setRacers={setRacers} />
				<StarshipRacer racers={racers} />
			</div>
		</body>
	);
};

export default App;