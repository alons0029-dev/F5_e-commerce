
// AXIOS Component
import axios from "axios";

// JSON-SERVER Url
const apiCharactersUrl = "http://localhost:3000/characters";

/* CRUD FUNCTIONALITY */

// READ
const getCharacters = async () => {
    const response = await axios.get(apiCharactersUrl);
    return response.data;
};

// CREATE
const createCharacter = async (newCharacterData, existingCharacters) => {
    
    const generateId = (characters) => {
        return characters.length > 0
        ? Math.max(...characters.map((character) => character.id)) + 1
        : 1;
    };
        
    const newCharacter = {
        ...newCharacterData,
        id: generateId(existingCharacters),
    };
        
    const response = await axios.post(apiCharactersUrl, newCharacter);
    return response.data;
};
    
// DELETE
const deleteCharacter = async (id) => {
    const response = await axios.delete(`${apiCharactersUrl}/${id}`);
    return response.data;
};

// UPDATE
const updateCharacter = async (id, updateCharacterData) => {
    const response = await axios.put(`${apiCharactersUrl}/${id}`, updateCharacterData);
    return response.data;
};

export { getCharacters, createCharacter, updateCharacter, deleteCharacter };