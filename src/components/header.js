import React from 'react'
import Logo from '../images/pokemon-logo.gif'

function Header (){
    return(
        <div className="header">
            <img src={Logo} alt= "pokemon logo" width="200px" className="header__logo" />
        </div>
    )
}

export default Header;