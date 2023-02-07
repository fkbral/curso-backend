const animal = {
  especie: 'Canis Lupus',
  habitatComum: 'Florestas dos EUA',
  expectativaDeVida: 20,
  'eh Terrestre': true
}

// Seria equivalente à
// const especieDoAnimal1 = 'Canis Lupus'
// const habitatComumDoAnimal1 = 'Florestas dos EUA'
// const expectativaDeVidaDoAnimal1 = 20
// const ehTerrestreDoAnimal1 = true

// console.log(animal.ehTerrestre)
console.log(animal['eh Terrestre'])
console.log(animal.especie)
console.log(animal.populacao)

animal.populacao = 600_000_000
// animal.populacao = 6 * 10 ** 9

console.log(animal.populacao)
