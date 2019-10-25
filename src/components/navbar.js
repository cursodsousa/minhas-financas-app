import React from 'react'

import NavbarItem from './navbarItem'
import { AuthConsumer } from '../main/auth'

function Navbar({autenticado, deslogar}){
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
          <a href="#/home" className="navbar-brand">Minhas Finanças</a>
          <button className="navbar-toggler" type="button" 
                  data-toggle="collapse" data-target="#navbarResponsive" 
                  aria-controls="navbarResponsive" aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <NavbarItem render={autenticado} href="#/home" label="Home" />
                <NavbarItem render={autenticado} href="#/cadastro-usuarios" label="Usuários" />
                <NavbarItem render={autenticado} href="#/consulta-lancamentos" label="Lançamentos" />
                <NavbarItem render={autenticado} onClick={deslogar} href="#/login" label="Sair" />
            </ul>
            </div>
        </div>
      </div>
    )
}

export default () => (
  <AuthConsumer>
    {context => (<Navbar autenticado={context.autenticado} deslogar={context.encerrarSessao} />) }
  </AuthConsumer>
)