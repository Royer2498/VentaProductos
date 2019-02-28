import Producto from './Producto.js';

class Venta{

    constructor(ganancia){
        this.ganancia = ganancia;
    }

    obtenerGanancia(){
        return this.ganancia;
    }

    vender(producto){
        this.ganancia += producto.getPrecio();
    }
}

module.exports = Venta;
