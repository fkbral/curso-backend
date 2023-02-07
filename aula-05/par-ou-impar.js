const listaDeNumeros = [25, 88, 71, 192, 333, 222, 10, 11, 62]
const listaDePares = []
const listaDeImpares = []

let indiceDoNumero = 0

while (indiceDoNumero < listaDeNumeros.length) {
  if (listaDeNumeros[indiceDoNumero] % 2 === 0) {
    listaDePares.push(listaDeNumeros[indiceDoNumero])
  } else {
    listaDeImpares.push(listaDeNumeros[indiceDoNumero])
  }

  indiceDoNumero = indiceDoNumero + 1
}
console.log(listaDePares)
console.log(listaDeImpares)
