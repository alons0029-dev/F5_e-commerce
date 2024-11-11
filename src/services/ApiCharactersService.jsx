
// AXIOS Component
import axios from "axios";

// JSON-SERVER Url
const apiCharactersUrl = "http://localhost:3000/characters";

/* CRUD FUNCTIONALITY */

// Read
const getAllCharacters = async () => {
	const response = await axios.get(apiCharactersUrl);
	return response.data;
};

// Create
const createCharacter = async (newCharacter) => {
	const response = await axios.post(apiCharactersUrl, newCharacter);
	return response.data;
};

// Update
const updateCharacter = async (id, editCharacter) => {
	const response = await axios.put (`${apiCharactersUrl}/${id}`, editCharacter);
	return response.data
};

export { apiCharactersUrl, getAllCharacters, createCharacter, updateCharacter };