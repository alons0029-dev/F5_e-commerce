
// REACT-ROUTER-DOM Components
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// REACT Components
import { useState } from "react";

// SERVICE Component
import { createCharacter } from "../../services/ApiCharactersService.jsx";
import Header from "../../components/Header/Header.jsx";

/* FUNCTIONALITY */
const CreateCharacter = () => {

	const [title, setTitle] = useState("");
	const [artist, setArtist] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [icon, setIcon] = useState("");
	const [files, setFiles] = useState("");

	const navigate = useNavigate();

	const addCharacter = async (event) => {
		event.preventDefault();
		
		const newCharacterData = {
			title: title,
			artist: artist,
			description: description,
			image: image,
			icon: icon,
			files: files,
		};

		await createCharacter(newCharacterData);
		navigate("/");
	};

	return (
		<>
			<Header />
			<form onSubmit={addCharacter}>
				<input 
					required
					name="title"
					type="text"
					placeholder="Character Name"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<input 
					required
					name="artist"
					type="text"
					placeholder="Artist Name"
					value={artist}
					onChange={(event) => setArtist(event.target.value)}
				/>
				<input 
					required
					name="description"
					type="text"
					placeholder="Add Description"
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
				<div>
					<p>Charcter Image</p>
					<input 
						required
						name="image"
						type="file"
						value={image}
						onChange={(event) => setImage(event.target.value)}
					/>
				</div>
				<div>
					<p>Character Icon</p>
					<input 
						required
						name="icon"
						type="file"
						value={icon}
						onChange={(event) => setIcon(event.target.value)}
					/>
				</div>
				<div>
					<p>Character Files</p>
					<input 
						required
						name="files"
						type="file"
						value={files}
						onChange={(event) => setFiles(event.target.value)}
					/>
				</div>
				<button type="submit">
					ADD
				</button>
				<Link to="/">
					<button>
						CANCEL
					</button>
				</Link>
			</form>
		</>
	);
};

export default CreateCharacter