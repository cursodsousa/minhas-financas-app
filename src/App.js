import React from 'react';

import 'bootswatch/dist/flatly/bootstrap.css'

class App extends React.Component {

  state = {
    email: '',
    senha: ''
  }

  entrar = () => {
    console.log('email ', this.state.email)
    console.log('senha', this.state.senha)
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{
            position: 'relative',
            left: '300px'
          }} >
            <div className="bs-docs-section">
      
              <div className="card mb-3">
                <h3 className="card-header">Login</h3>
                <div className="card-body">
            
  
                  <fieldset>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="bs-component">
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email: *</label>
                            <input type="email" 
                                   value={this.state.email}
                                   onChange={(e) => this.setState({email: e.target.value})}
                                   className="form-control" 
                                  id="exampleInputEmail1" 
                                  aria-describedby="emailHelp" 
                                  placeholder="Digite o Email" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Senha: *</label>
                            <input type="password" 
                                  value={this.state.senha}
                                  onChange={(e) => this.setState({senha: e.target.value})}
                                  className="form-control" id="exampleInputPassword1" 
                                  placeholder="Password" />
                          </div>
                      </div>
                    </div>
                  </div>

                    <button onClick={this.entrar} type="button" className="btn btn-success">Entrar</button>
                    <button type="button" className="btn btn-danger">Cadastrar</button>
                  </fieldset>
                </div>
            </div>
          
          </div>
  
          </div>
          </div>
        </div>
    )
  }
}

export default App