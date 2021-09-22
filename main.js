//   0             1        2       3       4       5
let nombres = ["Julian", "Michelle", "Luis", "Ana", "Eliana", "Jose"];

let alumnos = [
    { id: 5, name: 'Luis' }, 
    { id: 9, name: 'Pedro' }, 
    { id: 2, name: 'Maria' }, 
    { id: 4, name: 'Patricia' }
];

for (let i in nombres) {
    console.log(nombres[i]);
}

function imprimirNombres(valor, indice, arreglo) {
    console.log(`He conseguido el siguiente nombre: ${valor} en la posicion: ${indice} en el arreglo: [${arreglo}]`);
}

nombres.forEach(imprimirNombres); // value, index, arr

function ordernarAlfabeticamente(valorA, valorB) {
    if (valorA.id < valorB.id) {
        return -1;
    } else {
        return 1;
    }
}

alumnos.sort(ordernarAlfabeticamente);

console.log(alumnos);

let eliminarNombres = nombres.filter(function (valor) {
    return valor.toLowerCase().includes('a');
})

console.log(eliminarNombres);