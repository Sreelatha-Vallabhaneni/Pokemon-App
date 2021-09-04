import React from 'react'
import Logo from '../images/pokemon-logo.gif'

function Header (){
    return(
        <div>
            <img src={Logo} alt= "pokemon logo" width="200px"  />
        </div>
    )
}

export default Header;