import ApiService from '../apiservice'

class UsuarioService extends ApiService{

    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais){
        return this.post(this.apiurl, credenciais);
    }
}

export default UsuarioService;