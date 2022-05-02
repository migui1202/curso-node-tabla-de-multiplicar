
const fs = require('fs');
const crearArchivo = async(base, l,hasta) => {

    try {

        let salida = '';
        for(i=0; i<=hasta;i++){
            const multiplicacion = 5*i;
            salida += `${base} x ${i} es igual a ${base * i} \n`;
        }

        if(l === true){
        console.log('====================');
        console.log(`  Tabla del: ${base} `);
        console.log('====================');
        console.log(salida);
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`;
    }else{
        console.log("imprimir esta en false");
    }
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}