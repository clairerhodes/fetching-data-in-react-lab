import { useState } from "react";

// StarshipSearch: Allows users to submit a search form for the name of a starship.
const StarshipSearch = ({ setShips }) => {
	/* API search functionality */

	// set URL for fetching data
	const SEARCH_URL = `https://swapi.dev/api/starships/?search=`;

	// update list based on searchQuery
	const getSearchedShips = async (endpoint) => {
		// get all ships from API
		let response = await fetch(endpoint);
		// convert data to json 
		let JSONdata = await response.json();
		// returns array, sets to state varaible
		setShips(JSONdata.results);
	};

	/* controlled form functionality */

	// state variable for text input
	const [searchQuery, setSearchQuery] = useState("");

	//
	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	//
	const handleSubmit = (event) => {
		event.preventDefault();
		const endpoint = SEARCH_URL + searchQuery;
		getSearchedShips(endpoint);
		setSearchQuery("");
	};

	return (
		<>
			<h2>Search</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="searchQuery">Enter Name or Model: </label>
				<input
					type="text"
					name="searchQuery"
					id="searchQuery"
					value={searchQuery}
					onChange={handleInputChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default StarshipSearch;