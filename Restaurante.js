import ElementoPedido from "./ElementoPedido";
import Producto from "./Producto.js";
import Precio from "./Precio.js";
import Tiempo from "./Tiempo.js";
import Fecha from "./Fecha.js";
import Cliente from "./Cliente.js";
import Direccion from "./Direccion.js";
export default class Restaurante {
    /**
     * 
     * @param {string} nombre 
     * @param {string} telefono 
     * @param {string} direccion 
     */
    constructor(nombre, telefono, direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.productos = new Array();
        this.pedidos = new Array();
    }
    registrarProductos(producto) {
        this.productos.push(producto.getDescription());
    }
    listarProductos() {
        this.productos.forEach((producto, i) => {
            console.log(`${i} - ${producto}`);
        });
    }
    registrarPedido(pedido) {
        this.pedidos.push(pedido);
    }
    listarPedidos() {
        this.pedidos.forEach((pedido, i) => {
            console.log(`${i} - ${pedido.getResumen()}`);
        });
    }
}