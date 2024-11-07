
// REACT Compnents
import { useState } from "react";
import { useEffect } from "react";

// Service Component
import { getAllCharacters } from "../../services/ApiProductsService";

// Images
import characterPlaceholder from "../../assets/images/character-placeholder.png";

// Style
import "./characters.css";
import { Link } from "react-router-dom";

/* FUNCTIONALITY */
const Characters = () => {
    
    const [characters, setCharacters] = useState([]);

    const getAllCharactersFromService = async () => {
        const response = await getAllCharacters();
        setCharacters(response);
    }

    useEffect( () => {
        getAllCharactersFromService();
    }, []);

    return (
        <>  
            <Link to={"/create-character"}>
                <button className="add-character-btn">
                    {/* Add [+] Icon */}
                    New Character
                </button>
            </Link>
            <div className="characters-container">
                {
                    characters.map( (character) => (
                        <div key={character.id}>
                            {/* Add DELETE Icon */}
                            {/* Add UPDATE Icon */}
                            <div className="character-container">
                                <h3 className="character-title">{character.title}</h3>
                                <img src={characterPlaceholder} alt="character image" />
                                <p className="character-artist">{character.artist}</p>
                                <p className="character-description">{character.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Characters