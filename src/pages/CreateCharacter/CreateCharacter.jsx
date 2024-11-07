
// REACT Components
import { useState } from "react"

// REACT-ROUTER-DOM Components
import { useNavigate } from "react-router-dom";

// SERVICE Components
import { createCharacter } from "../../services/ApiProductsService";

/* FUNCTIONALITY */
const CreateCharacter = () => {

    const [titleCharacter, setTitleCharacter] = useState("");
    const [artistCharacter, setArtistCharacter] = useState("");
    const [descriptionCharacter, setDescriptionCharacter] = useState("");

    const navigate = useNavigate();

    const addCharacter = async (event) => {

        event.preventDefault();

        const newCharacter = {
            title: titleCharacter,
            artist: artistCharacter,
            description: descriptionCharacter
        }

        await createCharacter(newCharacter);
        navigate("/");
    }

    return (
        <form onSubmit={addCharacter}>
            <div className="character-form-input">
                <input 
                    required
                    type="text"
                    placeholder="Name"
                    value={titleCharacter}
                    onChange={ (event) => setTitleCharacter(event.target.value) }
                /> 
            </div>
            <div className="character-form-input">
                <input 
                    required
                    type="text"
                    placeholder="Artist"
                    value={artistCharacter}
                    onChange={ (event) => setArtistCharacter(event.target.value) }
                /> 
            </div>
            <div className="character-form-input">
                <input 
                    required
                    type="text"
                    placeholder="Description"
                    value={descriptionCharacter}
                    onChange={ (event) => setDescriptionCharacter(event.target.value) }
                /> 
            </div>
            <button type="submit">
                {/* Add ADD Icon */}
                Add
            </button>
            {/* Add Cancel Link */}
            <button>
                {/* Add CANCEL Icon */}
                Cancel
            </button>
        </form>
    )
}

export default CreateCharacter