class cl_vehiculo {
  constructor(p, t) {
    this.placa = p;
    this.tipoVehiculo = t;
  }

  tarifa() {
    if (this.tipoVehiculo === 1) return 10;
    else if (this.tipoVehiculo === 2) return 20;
    else return 50;
  }
}

class cl_peaje {
  constructor() {
    this.cont1 = 0;
    this.cont2 = 0;
    this.cont3 = 0;
    this.contv = 0;
    this.acumTarifa = 0;
  }
  procesar(v) {
    this.contv++;
    if (v.tipoVehiculo === 1) this.cont1++;
    if (v.tipoVehiculo === 2) this.cont2++;
    if (v.tipoVehiculo === 3) this.cont3++;

    this.acumTarifa += v.tarifa();
  }
  porcentajetipo1() {
    return (this.cont1 / this.contv) * 100;
  }
  porcentajetipo2() {
    return (this.cont2 / this.contv) * 100;
  }
  porcentajetipo3() {
    return (this.cont3 / this.contv) * 100;
  }

  montMunicipio() {
    return this.acumTarifa * 0.4;
  }
}

let vehiculo1 = new cl_vehiculo(111, 1);
let vehiculo2 = new cl_vehiculo(222, 2);
let vehiculo3 = new cl_vehiculo(333, 3);
let vehiculo4 = new cl_vehiculo(444, 3);
let vehiculo5 = new cl_vehiculo(555, 1);

let peaje = new cl_peaje();
peaje.procesar(vehiculo1);
peaje.procesar(vehiculo2);
peaje.procesar(vehiculo3);
peaje.procesar(vehiculo4);
peaje.procesar(vehiculo5);

let salida = document.getElementById("app");
salida.innerHTML = "Resultados:";

salida.innerHTML += `<p>EL vehiculo de Placa${vehiculo1.placa} tipo ${vehiculo1.placa} su tarifa a pagar es ${vehiculo1.tarifa()}</p>`;
salida.innerHTML += `<p>EL vehiculo de Placa${vehiculo2.placa} tipo ${vehiculo2.placa} su tarifa a pagar es ${vehiculo2.tarifa()}</p>`;
salida.innerHTML += `<p>EL vehiculo de Placa${vehiculo3.placa} tipo ${vehiculo3.placa} su tarifa a pagar es ${vehiculo3.tarifa()}</p>`;
salida.innerHTML += `<p>EL vehiculo de Placa${vehiculo4.placa} tipo ${vehiculo4.placa} su tarifa a pagar es ${vehiculo4.tarifa()}</p>`;
salida.innerHTML += `<p>EL vehiculo de Placa${vehiculo5.placa} tipo ${vehiculo5.placa} su tarifa a pagar es ${vehiculo5.tarifa()}</p> <br>`;

salida.innerHTML += `<p> El Porcentaje del tipo de vehiculo 1 es de ${peaje.porcentajetipo1()}% </p>`;
salida.innerHTML += `<p> El Porcentaje del tipo de vehiculo 2 es de ${peaje.porcentajetipo2()}% </p>`;
salida.innerHTML += `<p> El Porcentaje del tipo de vehiculo 3 es de ${peaje.porcentajetipo3()}% </p>`;

salida.innerHTML += `<p> Monto total para el Municipio ${peaje.montMunicipio()}</p>`;
