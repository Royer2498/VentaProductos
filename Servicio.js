class Servicio{

    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    getPrecio(){
        return this.precio;
    }

}

module.exports = Servicio;