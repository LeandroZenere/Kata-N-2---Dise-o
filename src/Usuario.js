"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, email, password, confirmpassword) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        if (this.validarContraseña(password, confirmpassword)) {
            this.password = password;
            this.confirmpassword = confirmpassword;
        }
        else {
            throw new Error("Las contraseñas no son iguales");
        }
    }
    Usuario.CrearUsuario = function (nombre, apellido, email, password, confirmpassword) {
        var usuario = new Usuario(nombre, apellido, email, password, confirmpassword);
        return usuario;
    };
    Usuario.prototype.validarContraseña = function (password, confirmpassword) {
        return password === confirmpassword;
    };
    // Métodos para acceder a las propiedades privadas
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.getApellido = function () {
        return this.apellido;
    };
    Usuario.prototype.getEmail = function () {
        return this.email;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
