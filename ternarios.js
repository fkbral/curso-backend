const idade = 19
const temCNH = true

const podeDirigir = idade > 18 && temCNH

if (podeDirigir) {
  console.log('Pessoa está habilitada para conduzir veículo')
} else {
  console.log('Pessoa não está habilitada para conduzir veículo')
}

const numeroDePassageiros = podeDirigir ? 4 : 0

// let numeroDePassageiros
// if (podeDirigir) {
//   numeroDePassageiros = 4
// } else {
//   numeroDePassageiros = 0
// }

console.log({ numeroDePassageiros })
