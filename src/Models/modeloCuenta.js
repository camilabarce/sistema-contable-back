
// Con esta clase o 'modelo' estructuramos la información de las cuentas a imprimir.
// Luego, los controladores retornarán esta misma información o estructura, pero en formato JSON. 

class Cuenta {
  constructor(codigo, nombre, tipo, saldo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.tipo = tipo;
    this.saldo = saldo;
  }
}

module.exports = Cuenta;

  