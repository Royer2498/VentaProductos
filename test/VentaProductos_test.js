var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Producto from '../Producto.js';
import Venta from '../Venta.js';

describe('VentaProductosTest',function () {

    it('Si no vendo nada la ganancia deberia ser 0',function () {
        let venta = new Venta(0);
        expect(venta.obtenerGanancia()).equal(0);
    });

    it('Si vendo un producto que cuesta 50 la ganancia deberia ser 50',function () {
        let carne = new Producto("carne",50);
        let venta = new Venta(0);
        venta.vender(carne);
        expect(venta.obtenerGanancia()).equal(50);
    });

    it('Si vendo dos productos la ganancia deberia ser la suma de sus valores',function () {
        let carne = new Producto("carne",50);
        let cepillo = new Producto("cepillo",20);
        let venta = new Venta(0);
        venta.vender(carne);
        venta.vender(cepillo);
        expect(venta.obtenerGanancia()).equal(70);
    });


});
