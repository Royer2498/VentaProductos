var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Producto from '../Producto.js';
import Venta from '../Venta.js';
import Servicio from '../Servicio.js';
import Articulo from '../Articulo';

describe('VentaProductosTest',function () {

    it('Si no vendo nada la ganancia deberia ser 0',function () {
        let venta = new Venta(0);
        expect(venta.obtenerGanancia()).equal(0);
    });

    it('Si vendo un servicio la ganancia deber ser el costo de la misma ',function () {
        let limpieza = new Servicio("limpieza",150);
        let venta = new Venta(0);
        venta.vender(limpieza);
        expect(venta.obtenerGanancia()).equal(150);
    });

    it('Si vendo un articulo la ganancia deber ser el costo del mismo ',function () {
        let lavandina = new Articulo("lavandina",80);
        let venta = new Venta(0);
        venta.vender(lavandina);
        expect(venta.obtenerGanancia()).equal(80);
    });

    it('Si vendo un articulo y un servicio la ganancia deberia ser la suma de los dos costos ',function () {
        let lavandina = new Articulo("lavandina",80);
        let limpieza = new Servicio("limpieza",150);
        let venta = new Venta(0);
        venta.vender(limpieza);
        venta.vender(lavandina);
        expect(venta.obtenerGanancia()).equal(230);
    });

    it('Si calculo la tarifa de un servicio deberia retornarme el 20% de su costo',function () {
       let reparacion = new Servicio("reparacion",500);
       expect(reparacion.calcularTarifa()).equal((reparacion.getPrecio() * 20)/100);
    });

    it('Si calculo la tarifa de un articulo deberia retornarme el 35% de su costo',function () {
        let esponja = new Articulo("esponja",500);
        expect(esponja.calcularTarifa()).equal((esponja.getPrecio() * 35)/100);
    });







});
