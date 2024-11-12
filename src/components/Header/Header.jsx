
// REACT-ROUTER-DOM Compoents
import { Link } from "react-router-dom"

/* FUNCTIONALITY */
const Header = () => {
  return (
    <header>
        <Link to="/">
            <div>
                E-Commerce Logo
            </div>
        </Link>
        <nav>
            <Link to="/characters">
                CHARACTERS
            </Link>
        </nav>
    </header>
  )
}

export default Header