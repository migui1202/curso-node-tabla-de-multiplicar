//import { watch } from 'fs';
//Imprimir la tabla del 5 de multiplicar.
const {crearArchivo} = require('./helpers/multiplicar');
//const fs = require('fs');
const argv = require('./yargs/yargs');
const colors = require('@colors/colors');
colors.enable();

//option('l')
// listar alias
// boolean
// default: false
// que llegue el al crearchivos, si listar esta en true, impriminos, si no no imprimimos.



//const [,,arg3 = 'base=5'] = process.argv;
//const [,base = 5] = arg3.split('=');

//console.log(process.argv);
//fs.writeFileSync(`tabla-${base}.txt`, salida, (err) => {
    //if(err) throw err;
    //console.log('tabla del 5 creada con exito');
//})
console.log('hello'.rainbow);
crearArchivo(argv.b, argv.l,argv.h).then(resultado => console.log(resultado.rainbow))
.catch(err => console.log(err));