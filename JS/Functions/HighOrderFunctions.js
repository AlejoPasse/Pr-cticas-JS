// Funciones como parámetros 
//Calculamos 10 números aletatorios basados en una distribueción estadística
let normal=[];
let logar =[];
//Método .push agrega el arreglo al final de otro arreglo
for (let i=0; i<10; i++){
    normal.push(distBasedRandom(100, 10 ,normalDistribution));
    logar.push(distBasedRandom(100, 10 ,logarithmicDistribución));
}
console.log(`normal: ${normal}`);
console.log();
console.log(`Logaríthmic: ${logar}`);

//Math.round redondea un número
function distBasedRandom(a, b, dist) {
    return Math.round (1000 * dist (a,b))/1000 //Multiplica por 1000 para dejar 3 decimales
}

//Math.random devuelve un número al azar entre 0 y 1
function normalDistribution (a, b) {
    const x= Math.random();
    return a * Math.exp(x * Math.log(b/a))
}
function logarithmicDistribución (media, desviacion) {
    const x= Math.random();
    const y= Math.random();
    const formNormal= Math.sqrt(-2 * Math.log(x))*Math.cos(2 * Math.PI * y);
    return formNormal * desviacion + media;
}
//El problema es que siempre estamos sacando el número con una semilla distinta gracias al math.random