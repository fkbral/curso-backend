function soma (...numeros) {
  let resultado = 0

  //   for (const numero of arguments) {
  for (const numero of numeros) {
    resultado = resultado + numero
  }

  return resultado
}

const resultado1 = soma(2, 3, 1)
const resultado2 = soma(1, 6)

console.log(resultado1)
console.log(resultado2)

console.log(soma(2, 3, 1) + soma(1, 6))
console.log(resultado1 + resultado2)
