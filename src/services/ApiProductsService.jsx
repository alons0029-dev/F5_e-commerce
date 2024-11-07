
// AXIOS Component
import axios from "axios";

// JSON-SERVER Url
const apiCharactersUrl = "http://localhost:3000/characters";

/* CRUD FUNCTIONALITY */

// CRUD - Read
const getAllCharacters = async () => {
    const response = await axios.get(apiCharactersUrl);
    return response.data;
}

// CRUD - Create
const createCharacter = async (createCharacter) => {
    const response = await axios.post(apiCharactersUrl, createCharacter);
    return response.data;
}

// CRUD - Update (In progress)
const updateCharacter = async (updateCharacter) => {
    const response = await axios.post(apiCharactersUrl, updateCharacter);
    return response.data;
}

// CRUD - Delete (In progress)
const deleteCharacter = async (deleteCharacter) => {
    const response = await axios.post(apiCharactersUrl, deleteCharacter);
    return response.data;
}

export { getAllCharacters, createCharacter, updateCharacter, deleteCharacter }