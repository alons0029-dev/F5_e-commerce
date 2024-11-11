/* eslint-disable no-undef */

// AXIOS Components
import axios from "axios";

// REACT-ROUTER-DOM Components
import { useParams, useNavigate, Link } from "react-router-dom";

// REACT Components
import { useState, useEffect } from "react";

/* FUNCTIONALITY */
const UpdateCharacter = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({
        id: id,
        title: "",
        artist: "",
        description: "",
        image: "",
        icon: "",
        files: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/characters/" + id)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err))
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put("http://localhost:3000/characters/" + id, character)
            .then(() => {
                alert("Character edited successfully!");
                navigate("/");
            });
    };

  return (
    <form onSubmit={handleSubmit}>
        <input 
            required
            name="title"
            type="text"
            placeholder="Character Name"
            value={character.title}
            onChange={(event) => setTitle({...character, title:event.target.value})}
        />
        <input 
            required
            name="artist"
            type="text"
            placeholder="Artist Name"
            value={character.artist}
            onChange={(event) => setArtist({...character, title:event.target.value})}
        />
        <input 
            required
            name="description"
            type="text"
            placeholder="Add Description"
            value={character.description}
            onChange={(event) => setDescription({...character, description:event.target.value})}
        />
        <input 
            required
            name="image"
            type="file"
            value={character.title}
            onChange={(event) => setImage({...character, image:event.target.value})}
        />
        <input 
            required
            name="icon"
            type="file"
            value={character.icon}
            onChange={(event) => setIcon({...character, title:event.target.value})}
        />
        <input 
            required
            name="files"
            type="file"
            value={character.files}
            onChange={(event) => setFiles({...character, files:event.target.value})}
        />
        <button type="submit">Confirm Edit</button>
        <Link to="/">
            <button>Cancel</button>
        </Link>
    </form>
  );
};

export default UpdateCharacter