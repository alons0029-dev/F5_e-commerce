
// AXIOS Component
import axios from "axios";

// JSON-SERVER Url
const apiCharactersUrl = "http://localhost:3000/characters";

/* CRUD FUNCTIONALITY */

// CRUD - Read
const getCharacters = async () => {
    const response = await axios.get(apiCharactersUrl);
    return response.data;
}

// CRUD - Create
const createCharacter = async (characterData) => {
    const response = await axios.post(apiCharactersUrl, characterData);
    return response.data;
}

// CRUD - Update
const updateCharacter = async (id, updateCharacterData) => {
    const response = await axios.put(`${apiCharactersUrl}/${id}`, updateCharacterData);
    return response.data;
}

// CRUD - Delete
const deleteCharacter = async (id) => {
    const response = await axios.delete(`${apiCharactersUrl}/${id}`);
    return response.data;
}

export { getCharacters, createCharacter, updateCharacter, deleteCharacter }