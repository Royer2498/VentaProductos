import Producto from './Producto.js';

class Servicio extends Producto{

    calcularTarifa() {
        return ((super.getPrecio() * 20) / 100);
    }
}

module.exports = Servicio;