
// REACT Components
import { useState } from "react";

/* FUNCTIONALITY */
const CreateCharacter = ( { onCreate }) => {

    const [characterData, setCharacterData] = useState({
        title: "",
        artist: "",
        description: "",
        image: "",
        icon: "",
        files: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCharacterData( (prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };

    const handleSubmit = (event) => {
            event.preventDefault();
            onCreate(characterData);
            setCharacterData( {
                title: "",
                artist: "",
                description: "",
                image: "",
                icon: "",
                files: ""
            });
        };

    return (
        <form onSubmit={ handleSubmit }>
            
            {/* Title Input */}
            <input 
                type="text"
                name="title"
                placeholder="Character Name"
                value={characterData.title}
                onChange={handleChange}
            />
            {/* Artist Input */}
            <input 
                type="text"
                name="artist"
                placeholder="Artist Name"
                value={characterData.artist}
                onChange={handleChange}
            />
            {/* Description Input */}
            <input 
                type="text"
                name="description"
                placeholder="Description"
                value={characterData.description}
                onChange={handleChange}
            />
            {/* Image Input */}
            <input 
                type="file"
                name="image"
                value={characterData.image}
                onChange={handleChange}
            />
            {/* Icon Input */}
            <input 
                type="file"
                name="icon"
                value={characterData.icon}
                onChange={handleChange}
            />
            {/* Files Input */}
            <input 
                type="file"
                name="files"
                value={characterData.files}
                onChange={handleChange}
            />
            <button type="submit">
                {/* Add [+] Icon */}
            </button>
            <button>
                {/* Add [x] Icon */}
            </button>
        </form>
    );
};

export default CreateCharacter