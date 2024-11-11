
// REACT-ROUTER-DOM Components
import { Link } from "react-router-dom";

// PropTypes Component
import PropTypes from "prop-types";

// HOOK Components
import useCharacters from "../../hooks/useCharacters/useCharacters";

// Components
import Character from "../../pages/Character/Character"

/* FUNCTIONALITY */
const CharacterList = () => {
    const { characters, handleUpdate, handleDelete } = useCharacters();

    return (
        <div>
            {characters.map((character) => (
                <Character 
                    key={character.id}
                    character={character}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                >
                    <Link to={`/edit/${character.id}`}>
                        <button>
                            {/* Add [Edit] Icon */}
                        </button>
                    </Link>
                    <button onClick={() => onDelete(character.id)}>
                        {/* Add [Delete] Icon */}
                    </button>    
                </Character>
            ))}
        </div>
    );
}

// PropTypes Definition
CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            artist: PropTypes.string.isRequired,
            description: PropTypes.string,
            image: PropTypes.instanceOf(File).isRequired,
            icon: PropTypes.instanceOf(File).isRequired,
            files: PropTypes.instanceOf(File).isRequired
            })
        ).isRequired,
        onUpdate: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired
    };

export default CharacterList;