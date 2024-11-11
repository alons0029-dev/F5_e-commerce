
// REACT Components
import { useState } from "react";
import { useEffect } from "react";

// REACT-ROUTER-DOM Components
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// HOOKS Component
import useCharacters from "../../hooks/useCharacters/useCharacters"
import CharacterForm from "../../components/CharacterForm/CharacterForm";




const CharacterFormPage = () => {
    const { characters, handleCreate, handleUpdate } = useCharacters();
    const { id } = useParams();
    const navigate = useNavigate();

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        if (id) {
            const foundCharacter = characters.find((character) => character.id === parseInt(id));
            setCharacter(foundCharacter);
        }
    }, [id, characters]);

    const handleSubmit = (formData) => {
        if (character) {
            handleUpdate(formData);
        } else {
            handleCreate(formData);
        }
        navigate("/characters");
    };

    return (
        <div>
            <h1>{character ? "Update Character" : "Create New Character"}</h1>
            <CharacterForm character={character} onSubmit={handleSubmit} />
        </div>
    );
}

export default CharacterFormPage;