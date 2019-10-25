import React from 'react'

import Login from '../views/login'
import Home from '../views/home'
import CadastroUsuario from '../views/cadastroUsuario'
import ConsultaLancamentos from '../views/lancamentos/consulta-lancamentos'
import CadastroLancamentos from '../views/lancamentos/cadastro-lancamentos'

import { Route, Switch, HashRouter } from 'react-router-dom'
import RotaProtegida from './rotaProtegida'
import { AuthConsumer } from './auth'

function Rotas({autenticado}){
    return (
        <HashRouter>
            <Switch>
                <RotaProtegida autenticado={autenticado} path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                <RotaProtegida autenticado={autenticado}  path="/consulta-lancamentos" component={ConsultaLancamentos} />
                <RotaProtegida autenticado={autenticado}  path="/cadastro-lancamentos/:id?" component={CadastroLancamentos} />
            </Switch>
        </HashRouter>
    )
}

export default () => (
    <AuthConsumer>
        {ctx => (<Rotas autenticado={ctx.autenticado} />)}
    </AuthConsumer>
)