// Style
import "./character-add.css";

/* STRUCTURE */
const CharacterAdd = () => {
  return (
    <div className="character-form-container">
        <h2 className="character-form-title">Add Character</h2>
        <form>
            <div className="character-name-container">
                <label htmlFor="">Name</label>
                <input type="text" />
            </div>
            <div className="character-description-container">
                <label htmlFor="">Description</label>
                <input type="text" />
            </div>
            <div className="character-artist-container">
                <label htmlFor="">Artist</label>
                <input type="text" />
            </div>
            <div className="character-file-size-container">
                <label htmlFor="">File Size</label>
                <input type="text" />
            </div>
            <div className="character-folder-container">
                <label htmlFor="">ZIP Folder</label>
                <input type="file" />
            </div>
        </form>
        <button className="form-cancel-btn">Cancel</button>
        <button className="form-accept-btn form-character-add-btn">Add</button>
    </div>
  )
}

export default CharacterAdd