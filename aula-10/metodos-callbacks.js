const tempoEmMilissegundos = 1000
let contadorDoTimer = 0

const timer = setInterval(
  onTimerEnd,
  tempoEmMilissegundos
)

function onTimerEnd () {
  if (contadorDoTimer === 3) {
    clearInterval(timer)
    return
  }
  console.log(`timer executou depois de ${tempoEmMilissegundos}ms`)
  contadorDoTimer += 1
}

console.log('Linha antes do setTimeout')

// setTimeout(
//   onTimerEnd,
//   tempoEmMilissegundos
// )

console.log('Linha após setTimeout')
