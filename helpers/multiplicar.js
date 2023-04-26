const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(`tabla-${base}.txt creado`);
  // });
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (listar) {
      console.log("=======================");
      console.log(`Tabla del: ${colors.blue(base)}`);
      console.log("=======================");
      console.log(consola);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
