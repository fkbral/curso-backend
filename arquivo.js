// Aula introdutória
// var teste (hoisting)
const qualquerCoisa = null
console.log(qualquerCoisa)
console.log(teste)
var teste = 'Meu Teste'
let numero = 20
const Numero2 = 300 // inteiro
const numeroFavorito = 5.0000000001 // real
const estaChovendo = false

const nome = 'Felipe'

console.log(numero)
console.log(Numero2)

numero = 8
console.log(numero)

console.log('Oi,', nome, '!')
console.log(`Oi, ${nome}! Seu número favorito é: ${numeroFavorito}`)

console.log(`Condição do clima é chuvoso: ${estaChovendo}`)
