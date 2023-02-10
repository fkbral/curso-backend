const provasDeMatematicaDaJosefina = [7.5, 4, 9]

// solução 1 com for..of
let media = 0
let soma = 0
for (const prova of provasDeMatematicaDaJosefina) {
  soma = soma + prova
}

media = soma / provasDeMatematicaDaJosefina.length

console.log(media.toFixed(2))

// solução 2 com reduce

// const somaDasProvas = provasDeMatematicaDaJosefina.reduce((acc, prova) => {
//   return acc + prova
// }, 0)

const somaDasProvas = provasDeMatematicaDaJosefina.reduce((acc, prova) =>
  acc + prova
, 0)

const mediaDasProvas = somaDasProvas / provasDeMatematicaDaJosefina.length

console.log(somaDasProvas)
console.log(mediaDasProvas)
