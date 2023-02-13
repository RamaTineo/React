import {NavLink } from "react-router-dom"
import Navbar from "./Navbar"

const Header = ({children}) => {

    const isHeader = true

    return (
        <>
        <header className="header">
            <NavLink to ="/">
            <h1 className="header__title">El Negocio de Atlas</h1>
            </NavLink>
            {children}
            <Navbar
                isHeader={isHeader}
            />
        </header>
        
        </>
    )
}

export default Header