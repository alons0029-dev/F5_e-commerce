
// REACT Components
import { useState } from "react"

/* FUNCTIONALITY */
const Character ( {character, onUpdate, onDelete} ) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({
        title: character.title,
        artist: character.artist,
        description: character.description,
        image: character.image,
        icon: character.icon,
        files: character.files
    });
    
}