
// REACT-ROUTER-DOM Components
import { Link } from "react-router-dom";

// HOOKS Component
import useCharacters from "../../hooks/useCharacters/useCharacters"
import CharacterList from "../../components/CharacterList/CharacterList";

const CharacterListPage = () => {
    const { characters, handleUpdate, handleDelete } = useCharacters();

    return (
        <div>
            <h1>Characters</h1>
            <CharacterList characters={characters} onUpdate={handleUpdate} onDelete={handleDelete} />
            <Link to="/create">
                <button>
                    {/* Add [Create] Icon */}
                </button>
            </Link>
        </div>
    );
}

export default CharacterListPage;