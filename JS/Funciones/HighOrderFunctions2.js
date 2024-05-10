// Funciones como retornos
//En vez de definir una función, podemos retornar una función
//Esto hace que devuelva una función que sí use los parámetros y no se genere un acoplamiento

let normal = [];
let loga = [];

for (let i = 0; i < 10; i++) {
  const distNormal = normalDistribution(100, 10);
  const distLoga = logarithmicDistribution(100, 10);

  normal.push(distBasedRandom(distNormal));
  loga.push(distBasedRandom(distLoga));
}

console.log(`normal: ${normal}`);
console.log();
console.log(`logarithmic: ${loga}`);

function distBasedRandom(dist) {
  const x = Math.random();
  return Math.round(1000 * dist(x)) / 1000; //round in 3 decimals
}

function logarithmicDistribution(a, b) {
  return function (x) {
    return a * Math.exp(x * Math.log(b / a));
  };
}

function normalDistribution(mean, stddev) {
  return function (x) {
    const z0 = Math.sqrt(-2 * Math.log(x)) * Math.cos(2 * Math.PI * Math.random());
    return z0 * stddev + mean;
  };
}