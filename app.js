const jsonHelper = require("./helper");

let func = (question, yes, no) => (confirm(question) ? yes() : no());

function add7(number) {
  return number + 7;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function capitalize(string) {
  const firstLetter = string.substr(0, 1).toUpperCase();
  const otherletters = string.slice(1).toLowerCase();
  return firstLetter + otherletters;
}

function lastLetter(string) {
  return string.slice(-1);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) continue;

  alert(i);
}

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

let number = prompt("Enter a number greater than 100");

do {
  if (number > 100) break;
  number = prompt("Wrong number!. Enter a number again");
} while (number <= 100);

function pasajeDeElementos(array1, array2) {
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());
  array1.push(array2.pop().toUpperCase());
  return array1;
}

const peliculasAnimadas = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];
const peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

const videoJuego = peliculasAnimadas.pop();

function pasajeDeElementos(array1, array2) {
  const largoArray = array2.length;
  for (let i = 0; i < largoArray; i++) {
    array1.push(array2.pop().toUpperCase());
  }

  return array1;
}

console.log(pasajeDeElementos(peliculas, peliculasAnimadas));

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = [];
  comparacionesAsiaEuropa[0] = asia[0] === europa[0];
  comparacionesAsiaEuropa[1] = asia[1] === europa[1];
  comparacionesAsiaEuropa[2] = asia[2] === europa[2];
  comparacionesAsiaEuropa[3] = asia[3] === europa[3];
  comparacionesAsiaEuropa[4] = asia[4] === europa[4];
  comparacionesAsiaEuropa[5] = asia[5] === europa[5];
  comparacionesAsiaEuropa[6] = asia[6] === europa[6];
  comparacionesAsiaEuropa[7] = asia[7] === europa[7];
  comparacionesAsiaEuropa[8] = asia[8] === europa[8];
  return comparacionesAsiaEuropa;
}

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = [];

  for (let i = 0; i < asia.length; i++) {
    comparacionesAsiaEuropa[i] = asia[i] === europa[i];
  }
  return comparacionesAsiaEuropa;
}

console.log(compararCalificaciones(asiaScores, euroScores));

const jsonHelper = require("./helper");
const concesionaria = {
  autos: jsonHelper.leerjson("autos.json"),
  agregarAuto: function (
    marca,
    modelo,
    anio,
    precio,
    patente,
    vendido = false
  ) {
    const nuevoAuto = {
      marca: marca,
      modelo: modelo,
      anio: anio,
      precio: precio,
      patente: patente,
      vendido: vendido,
    };
    this.autos.push(nuevoAuto);
    jsonHelper.escribirJson("autos.json", this.autos);
    return "Vehículo agregado correctamente";
  },

  buscarAuto: function (patente) {
    for (let i = 0; i < this.autos.length; i++) {
      const auto = this.autos[i];
      if (auto.patente === patente) {
        return auto;
      }
    }
  },

  venderAuto: function (patente) {
    let seleccionado = this.buscarAuto(patente);
    seleccionado.vendido = true;
    
    return (
      "El vehículo: " +
      seleccionado.marca +
      " " +
      seleccionado.modelo +
      " ha sido vendido"
    );
  },

  totalDeVentas: function () {
    let totalVentas = 0;
    for (let i = 0; i < this.autos.length; i++) {
      const auto = this.autos[i];
      if (auto.vendido) {
        totalVentas += auto.precio;
      }
      return totalVentas;
    }
  },

  eliminarAuto: function (patente) {
    const autoAEliminar = this.buscarAuto(patente);
    const indiceAEliminar = this.autos.indexOf(autoAEliminar);
    this.autos.splice(indiceAEliminar, 1);
    jsonHelper.escribirJson("autos.json", this.autos);
    return autoAEliminar;
  },

};

const indicarTipoDato = dato => typeof(dato);

const perimetroCircunsferencia = radio => 2 * radio * Math.PI;