
// REACT Components
import { useState } from "react";
import { useEffect } from "react";


/* FUNCTIONALITY */
const CharacterForm = ( {character, onSubmit} ) => {
    const [formData, setFormData] = useState ({
        title: "",
        artist: "",
        description: "",
        image: "",
        icon: "",
        files: "",
    });

    useEffect(() => {
        if (character) {
            setFormData(character);
        }
    }, [character]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({
            title: "",
            artist: "",
            description: "",
            image: "",
            icon: "",
            files: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{character ? "Update" : "Add New"}</h2>
            <input
                required
                name="title"
                type="text"
                placeholder="Character Name"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                required
                name="artist"
                type="text"
                placeholder="Artist Name"
                value={formData.artist}
                onChange={handleChange}
            />
            <input
                required
                name="description"
                type="text"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />
            <input
                required
                name="image"
                type="file"
                value={formData.image}
                onChange={handleChange}
            />
            <input
                required
                name="icon"
                type="file"
                value={formData.icon}
                onChange={handleChange}
            />
            <input
                required
                name="files"
                type="file"
                value={formData.files}
                onChange={handleChange}
            />
            <button type="submit">
                {character ? "Update" : "Create"} Character
            </button>
        </form>
    );
}

// ADD PROPS


export default CharacterForm;