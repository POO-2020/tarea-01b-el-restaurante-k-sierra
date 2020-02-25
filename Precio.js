export default class Precio {
    constructor(precio) {
        this.precio = precio;
    }
    getPrecio() {
        return  `$${parseFloat(this.precio)}`;
    }
}