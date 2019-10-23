import React from 'react'

import Login from '../views/login'
import Home from '../views/home'
import CadastroUsuario from '../views/cadastroUsuario'
import ConsultaLancamentos from '../views/lancamentos/consulta-lancamentos'
import CadastroLancamentos from '../views/lancamentos/cadastro-lancamentos'

import { Route, Switch,  Redirect, HashRouter } from 'react-router-dom'

const isLogado = true;

const RotaAutenticada = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isLogado ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from : props.location} }} />
        )
    )} />
)

function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                <RotaAutenticada path="/home" component={Home} />
                <RotaAutenticada path="/consulta-lancamentos" component={ConsultaLancamentos} />
                <RotaAutenticada path="/cadastro-lancamentos/:id?" component={CadastroLancamentos} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas