class Producto{

    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    getPrecio(){
        return this.precio;
    }
}

module.exports = Producto;