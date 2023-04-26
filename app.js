// const { argv } = require("process");
const { crearArchivo } = require("./helpers/multiplicar");
const { options } = require("yargs");
const argv = require("./config/yargs");
const colors = require("colors");
console.clear();

// No hacerlo asi ya viene yargs para poder manejar toda esta logica

// const [ , , arg3 = "base=5"] = process.argv;
// const [ , base = 5] = arg3.split("=");

// console.log(process.argv);
// console.log(argv);

console.log("base: yargs", argv.base);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
