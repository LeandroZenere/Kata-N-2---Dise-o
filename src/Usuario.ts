export class Usuario {
  private nombre: string;
  private apellido: string;
  private email: string;
  private password: string;
  private confirmpassword: string;


  private constructor (
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    confirmpassword: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    if (this.validarContraseña(password, confirmpassword)) {
      this.password = password;
      this.confirmpassword = confirmpassword;
    } else {
      throw new Error("Las contraseñas no son iguales");
    }
  }

  
  public static CrearUsuario (
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    confirmpassword: string
  ): Usuario {
    const usuario = new Usuario(nombre, apellido, email, password, confirmpassword);
    return usuario;
  }

  private validarContraseña(password: string, confirmpassword: string): boolean {
    return password === confirmpassword;
  }

  // Métodos para acceder a las propiedades privadas
  public getNombre(): string {
      return this.nombre;
  }

  public getApellido(): string {
      return this.apellido;
  }

  public getEmail(): string {
      return this.email;
  }
}
