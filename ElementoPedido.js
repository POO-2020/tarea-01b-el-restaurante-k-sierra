import Precio from "./Precio.js";
import Producto from "./producto.js";
export default class elementoPedido{
    /**
     * 
     * @param {string} producto 
     * @param {number} cantidad 
     * @param {number} precio
     */
    constructor(producto, cantidad, precio){
        this.productos = producto;
        this.cantidades = cantidad;
        this.precios = precio;
    }
    getDescripccion(){
        return `${this.cantidades} x ${this.productos.nombres} = ${this.productos.precios.valores*this.cantidades}`;
    }
}