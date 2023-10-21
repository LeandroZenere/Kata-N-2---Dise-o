// import { UsuarioConsola } from './UsuarioConsola';
// import { Usuario } from './Usuario';
import { UsuarioDTO } from './UsuarioDTO';
import API, { Consola }  from './CrearUsuario';

const crearUsuarioApi = new API();
const crearUsuarioConsola = new Consola();

var usuarioDto =  new UsuarioDTO ("Juan", "Perez", "juanperez@email.com", "123456", "123456");
var mensajeCreadoApi = crearUsuarioApi.createUser(usuarioDto);
console.log(mensajeCreadoApi);

var usuarioDto =  new UsuarioDTO ("Maria", "Lopez", "marialopez@email.com", "password123", "password123");
var mensajeCreadoConsola = crearUsuarioConsola.createUser(usuarioDto);
console.log(mensajeCreadoConsola);
