class Asiento {
    constructor(id_asiento, fecha_asiento, codigo, cuenta, importe) {
      this.id_asiento = id_asiento;
      this.fecha_asiento = fecha_asiento;
      this.codigo = codigo;
      this.cuenta = cuenta;
      this.importe = importe;
    }
  }
  
  module.exports = Asiento;