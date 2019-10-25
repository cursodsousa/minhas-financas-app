import React from 'react'
import LocalStorageService from '../app/service/localstorageService'

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer;

export default class Auth extends React.Component {

    state = {
        autenticado : false
    }
    
    logar = (usuario) => {
        console.log('logar: ', usuario)
        LocalStorageService.adicionarItem('_usuario_logado', usuario);
        this.setState({ autenticado: true })
    }

    encerrarSessao = () => {
        LocalStorageService.removerItem('_usuario_logado')
        this.setState({ autenticado: false })
    }
   
    render(){
        return (
            <AuthContext.Provider value={{
                autenticado: this.state.autenticado,
                logar : this.logar,
                encerrarSessao: this.encerrarSessao
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}