
// REACT Components
import { useState, useEffect } from "react";

// SERVICE Components
import { getAllCharacters } from "../../services/ApiCharactersService";

// Pages
import CharacterCard from "../../components/CharacterCard/CharacterCard";

/* FUNCTIONALITY */
const Home = () => {

 const [characters, setCharacters] = useState([]);

 const getAllCharactersFromService = async () => {
  const response = await getAllCharacters();
  setCharacters(response);
 };

 useEffect(() => {
  getAllCharactersFromService();
 }, []);

  return (
    <>
      <h1>Home Page</h1>
      <div className="characters-container">
        {
          characters.map((character) => (
            <div key={character.id}>
              <CharacterCard 
                title={character.title}
                artist={character.artist}
                description={character.description}
                image={character.image}
                icon={character.icon}
                files={character.files}
              />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home