import Producto from './Producto.js';

class Articulo extends Producto{

    calcularTarifa() {
        return ((super.getPrecio()*35)/100);
    }
}
module.exports = Articulo;