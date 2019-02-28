class Producto{

    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    getPrecio(){
        return this.precio;
    }

    calcularTarifa(){
        throw "Subclass must implement abstract method";
    }
}

module.exports = Producto;