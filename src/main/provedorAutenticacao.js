import React from 'react'

import AuthService from '../app/service/authService'

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

class ProvedorAutenticacao extends React.Component{

    state = {
        usuarioAutenticado: null,
        isAutenticado: false
    }

    iniciarSessao = (usuario) => {

    }

    encerrarSessao = () => {

    }

    render(){
        return(
            <AuthProvider>
                {this.props.children}
            </AuthProvider>
        )
    }
}