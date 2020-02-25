import ElementoPedido from "./elementoPedido.js";
import Producto from "./Producto.js";
import Precio from "./Precio.js";
import Tiempo from "./Tiempo.js";
import Fecha from "./Fecha.js";
import Cliente from "./Cliente.js";
import Direccion from "./Direccion.js";
export default class Pedido {
  /**
   *
   * @param {Fecha} fecha 
   * @param {Tiempo} hora 
   * @param {Cliente} cliente 
   */
  constructor(fecha, hora, cliente) {
    this.fecha = fecha;
    this.hora = hora;
    this.cliente = cliente;
    this.elementosPedidos = new Array();
  }
   getResumen() {
    return `${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getProductos()} productos - total: ${this.getCostoTotal()}  `
  }
   getNumeroElementos() {
    return this.elementosPedidos.length
  }
   getProductos() {
    let x = 0;
    this.elementosPedidos.forEach(elemento => {
      x = elemento.cantidad + x
    })
    return (x)
  }
   getCostoTotal() {
    let x = 0;
    this.elementosPedidos.forEach(elemento => {
      x = (elemento.cantidad *elemento.producto.precio.valor) + x
    });
    return new Precio(x).getPrecio();
  }
   agregarElemento(elemento){
    this.elementosPedidos.push(elemento);
  }
   listarElementos(){
    this.elementosPedidos.forEach((elemento, i) => {
      console.log(`${i} - ${elemento.getDescripcion()}`)
    });
  }
}