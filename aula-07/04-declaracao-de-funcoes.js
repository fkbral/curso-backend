console.log(climaAtual())
console.log(climaAtual())
console.log(climaAtual())

function climaAtual () {
  const climasPossiveis = ['ensolarado', 'chuvoso', 'nevando']
  const climaSorteado = climasPossiveis[Math.round(Math.random() * 2)]
  return `Hoje está ${climaSorteado}`
}

const climaAtualArrow = () => {
  const climasPossiveis = ['ensolarado', 'chuvoso', 'nevando']
  const climaSorteado = climasPossiveis[Math.round(Math.random() * 2)]
  return `Hoje está ${climaSorteado}`
}

console.log(climaAtual())
console.log(climaAtual())
console.log(climaAtual())
console.log(climaAtualArrow())
console.log(climaAtualArrow())
