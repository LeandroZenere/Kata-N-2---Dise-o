export class UsuarioDTO {
    private nombre: string;
    private apellido: string;
    private email: string;
    private password: string;
    private confirmpassword: string;

    constructor(nombre: string, apellido: string, email: string, password:string, confirmpassword: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.confirmpassword = confirmpassword;
    }

    obtenerNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
    
    public getPassword(): string {
        return this.password;
    }

    public setPassword(password :string): void {
        this.password = password;
    };

    public getConfirmPassword(): string {
        return this.confirmpassword;
    }

    public setConfirmPassword(password :string): void {
        this.confirmpassword = password;
    };
}

