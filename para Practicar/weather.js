const fs = require('fs');

function leerArchivo(nombreArchivo) {
  return new Promise((resolve, reject) => {
    fs.readFile(nombreArchivo, 'utf8', (err, data) => {
      if (err) {
        reject('Error al leer el archivo: ' + err);
        return;
      }

      const arreglo = [];
      const lineas = data.trim().split('\n');

      lineas.forEach((linea) => {
        const valores = linea.trim().split(' ');
        const año = parseInt(valores[0]);
        const mes = parseInt(valores[1]);
        const dia = parseInt(valores[2]);
        const tempMedia = parseInt(valores[3]);
        const tempMax = parseInt(valores[4]);
        const tempMin = parseInt(valores[5]);
        const presion = parseInt(valores[6]);
        const humedad = parseInt(valores[7]);
        const presipitacion = parseInt(valores[8]);

        if (!arreglo[año - 1980]) {
          arreglo[año - 1980] = [];
        }

        if (!arreglo[año - 1980][mes - 1]) {
          arreglo[año - 1980][mes - 1] = [];
        }

        arreglo[año - 1980][mes - 1][dia - 1] = {
          tempMedia,
          tempMax,
          tempMin,
          presion,
          humedad,
          presipitacion,
        };
      });

      resolve(arreglo);
    });
  });
}
let arreglo;
leerArchivo('weather_cordoba.in')
  .then((arreglo) => {
    console.log(arreglo);
  })
  .catch((error) => {
    console.error(error);
  });
