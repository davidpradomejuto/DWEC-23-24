let usuario = {
    nombre: "David Prado",
    usuario: "davidp",
    contrasenia: "contra",

    login(usuario, contrasenia) {
        if (this.usuario == usuario && this.contrasenia == contrasenia) {
            console.log(`El usuario ${this.usuario} ha iniciado sesion`);
        } else {
            console.log(`Error el usuario o contraseña no son correctas`);

        }
    }
}

usuario.login("davidp", "firulais");