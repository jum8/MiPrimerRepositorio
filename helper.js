const fs = require('fs');

const jsonHelper = {
    leerJson: function (nombreArchivo) {
      const archivoJson = fs.readFileSync(nombreArchivo);
      const archivoParseado = JSON.parse(archivoJson);
      return archivoParseado;
    },
    escribirJson: function (nombreArchivo, datos) {
      const archivoJson = JSON.stringify(datos);
      fs.writeFileSync(nombreArchivo, archivoJson);
    },
  };

  module.exports = jsonHelper;