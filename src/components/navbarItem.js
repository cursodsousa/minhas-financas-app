import React from 'react'

function NavbarItem(props){
    if(props.render){
        return (
            <li className="nav-item">
                <a className="nav-link" href={props.href}>{props.label}</a>
            </li>
        )

    }else{
        return false;
    }
}

export default NavbarItem