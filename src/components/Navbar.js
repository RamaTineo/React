import { Link, NavLink } from "react-router-dom"


const NavBar = (props) => {

    const { isHeader, textLinkFooter, hrefLinkFooter } = props

    if (isHeader) {
        return (
            <nav className="header__navbar">
                <NavLink className="header__link" to="/juegos/microsoft">Juegos de Microsoft</NavLink>
                <NavLink className="header__link" to="/juegos/sony">Juegos de Sony</NavLink>
                <NavLink to="/cartWidget">
                    <span className="material-icons">shopping_cart</span>
                </NavLink>
            </nav>
        )
    } else {
        return (
            <nav className="footer__navbar">
                <a href={hrefLinkFooter}>{textLinkFooter}</a>
            </nav>
        )
    }
}

export default NavBar