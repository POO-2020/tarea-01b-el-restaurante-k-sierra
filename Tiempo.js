export default class Tiempo{
    /**
     * 
     * @param {number} hora 
     * @param {number} minuto 
     * @param {string} periodo 
     */
    constructor(hora, minuto, periodo){
    this.hora = hora;
    this.minuto = minuto;
    this.periodo = periodo;
    this.horas = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,"00"];
    }
    getFormato12(){
       return(`${this.hora} : ${this.minuto} ${this.periodo}`);
    }
    getFormato24(){
        if (this.periodo == 'AM'){
            return(`${this.hora} : ${this.minuto}`);
        }else{
            return(`${this.horas[this.hora+12]} : ${this.minuto}` );
        }
    }
}