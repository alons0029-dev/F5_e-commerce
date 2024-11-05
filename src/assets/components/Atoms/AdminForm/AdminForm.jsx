
// Images
import userIcon from "../../../images/user-icon.png";
import cancelIcon from "../../../images/cancel-icon.png";
import acceptIcon from "../../../images/accept-icon.png";

// Style
import "./admin-form.css";

// Functionality
const AdminForm = () => {
  return (
    <div className="admin-form-container">
        <div className="admin-form-styled">
            <form className="form-container" action="">
                <div className="user-icon-container">
                    <img className="form-user-icon" src={userIcon} alt="user-icon" />
                </div>
                <div className="admin-username">
                    <input className="admin-form-input" required type="text" placeholder="Username"/>
                </div>
                <div className="admin-password">
                    <input className="admin-form-input" required type="password" placeholder="Password"/>
                </div>
            </form>
            <div className="admin-form-button-container">
                <button className="admin-cancel-form-button">
                    <img className="form-icons" src={cancelIcon} alt="cancel-icon" />
                </button>
                <button type="submit" className="admin-accept-form-button">
                    <img className="form-icons" src={acceptIcon} alt="accept-icon" />
                </button> 
            </div>
        </div>
    </div>
  )
}

export default AdminForm