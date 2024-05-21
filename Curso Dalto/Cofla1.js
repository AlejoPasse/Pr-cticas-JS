function vuelto(dinero, precio){
    return `vuelto = ${dinero - precio}`
}


const calcularCompra = (n) => {
    let din = prompt(`Cuanto dinero tiene ${n}`)
    if (din >= 2.9) return (`${n}: Pote o confites, ${vuelto(din, 2.9)}`);
    else if (din >= 1.8 ) return (`${n}: Helardo, ${vuelto(din , 1.8)}  `);
    else if (din >= 1.7 ) return (`${n}: Heladovich, ${vuelto(din , 1.7)}  `);
    else if (din >= 1.6 ) return (`${n}: Heladix, ${vuelto(din , 1.6)}  `);
    else if (din >= 1 ) return (`${n}: Helado de crema, ${vuelto(din, 1)}  `);
    else if (din >= .6 ) return (`${n}: Helado de agua, ${vuelto(din , .6)}  `);
}

document.write(calcularCompra('Roberto'));
document.write('');
document.write(calcularCompra('Pedro'));
document.write('');
document.write(calcularCompra('Cofla'));
document.write('');