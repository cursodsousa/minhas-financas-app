import React from 'react';

import Rotas from './rotas'

import 'toastr/build/toastr.min'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import AppTemplate from './appTemplate'

const isLogado = false;

class App extends React.Component {

  render(){
    return(
      <AppTemplate autenticado={isLogado}>
          <Rotas />
      </AppTemplate>
    )
  }
}

export default App