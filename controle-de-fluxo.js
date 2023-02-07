const numero1 = 100
const numero2 = 20
const numeroCorreto = 30
const stringDeNumero = 30

if (numero1 > 1) {
  console.log('Este número é maior que 1')
}

if (numero1 > 200) {
  console.log('Este número é maior que 200')
} else {
  console.log('Este número é menor ou igual a 200')
}

if (numero2 <= numero1) {
  console.log(`${numero2} é menor ou igual a ${numero1}`)
}

if (numeroCorreto == stringDeNumero) {
  console.log('Os número são iguais em valor apenas (podem ter ocorrido coerções implícitas)')
}

if (numeroCorreto === stringDeNumero) {
  console.log('Os número são iguais em valor e tipo')
}
