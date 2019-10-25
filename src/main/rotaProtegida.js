import React from 'react'
import { Route, Redirect } from 'react-router-dom';

function RotaProtegida({ component: Component, autenticado, ...rest }){
    return(
        <Route {...rest} render={ props => {
            if(autenticado){
                return(
                    <Component {...props} />
                )
            }else{
                return (
                    <Redirect to={{pathname: '/login', state: { from: props.location }}} />
                )
            }
        }} />
    )    
}

export default RotaProtegida