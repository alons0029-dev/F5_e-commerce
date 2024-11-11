

// REACT Components
import { useState } from "react"
import { useEffect } from "react";

// SERVICE Components
import { getCharacters, createCharacter, updateCharacter, deleteCharacter } from "../../services/ApiCharactersService";


const useCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect (() => {
        const fetchCharacters = async () => {
            const data = await getCharacters();
            setCharacters(data);
        };
        fetchCharacters();
    }, []);

    const handleCreate = async (newCharacter) => {
        const createdCharacter = await createCharacter(newCharacter);
        setCharacters((prevCharacters) => [...prevCharacters, createdCharacter]);
    };

    const handleUpdate = async (updatedCharacter) => {
        const updated = await updateCharacter(updatedCharacter);
        setCharacters((prevCharacters) =>
            prevCharacters.map((character) => (character.id === updated.id ? updated : character))
        );
    };

    const handleDelete = async (id) => {
        await deleteCharacter(id);
        setCharacters((prevCharacters) => prevCharacters.filter((character) => character.id !== id))
    };

    return { characters, handleCreate, handleUpdate, handleDelete };
};

export default useCharacters;