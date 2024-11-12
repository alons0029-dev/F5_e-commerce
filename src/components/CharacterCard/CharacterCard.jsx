/* eslint-disable react/prop-types */

const CharacterCard = ({ title, artist, description, image, icon, files }) => {

  return (
    <>
        <section className="character-main-section">
            <img src={image} alt="character-image" />
            <h3>{title}</h3>
        </section>
        <section className="character-info-section">
            <p>{description}</p>
        </section>
        <section className="character-card-bottom-section">
            <img src={icon} alt="character-icon" />
            <p>{artist}</p>
            <a href={files} download={`${title}-assets`}>
                <button>Download</button>
            </a>
        </section>
    </>
  )
}

export default CharacterCard