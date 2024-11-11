import { useState } from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCharacters } from "../../services/ApiCharactersService";



const Characters = () => {

    const [characters, setCharacters] = useState([]);

    const getAllCharactersFromService = async () => {
        const characters = await getAllCharacters();
        setCharacters(characters);
    };

    useEffect(() => {
        getAllCharactersFromService();
    }, []);

    const deleteCharacter = (id) => {
        fetch("http://localhost:3000/characters/" + id, {
            method: "DELETE"
        })
            .then((response) => response.json()
            .then(getAllCharactersFromService())
        );
    };

  return (
    <>
        <Link to="/create">
            <button>Add New</button>
        </Link>
        <div>
            {
                characters.map((character) => (
                    <div key={character.id}>
                        <button onClick={() => deleteCharacter(character.id)}>
                            Erase
                        </button>
                        <Link to={`/update/${character.id}`}>
                            <button>Edit</button>
                        </Link>
                        <div className="character-container">
                            <h3>{character.title}</h3>
                            <img src={character.image} alt="character-image" />
                            <img src={character.icon} alt="character-icon" />
                            <p>{character.description}</p>
                            <p>{character.artist}</p>
                            <a href={character.files} download={`${character.title}-assets`}>
                                <button>Download</button>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Characters;