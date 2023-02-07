function cumprimenta (nome) {
  console.log(`Olá, ${nome}!`)
}

function cumprimentaComHora (nome, hora) {
  let cumprimento
  if (hora < 6) {
    cumprimento = 'Boa madrugada'
  } else
  if (hora < 12) {
    cumprimento = 'Bom dia'
  } else
  if (hora < 18) {
    cumprimento = 'Boa tarde'
  } else {
    cumprimento = 'Boa noite'
  }

  console.log(`${cumprimento}, ${nome}!`)
}

function cumprimentaComHoraEArgumentos (nome, hora) {
  let cumprimento
  if (arguments[1] < 6) {
    cumprimento = 'Boa madrugada'
  } else
  if (arguments[1] < 12) {
    cumprimento = 'Bom dia'
  } else
  if (arguments[1] < 18) {
    cumprimento = 'Boa tarde'
  } else {
    cumprimento = 'Boa noite'
  }

  console.log(`${cumprimento}, ${arguments[0]}!`)
}

cumprimenta('Cláudia')
cumprimenta('Roberta')
// cumprimenta('Zeca')
// cumprimenta('Ronaldo')
// cumprimenta('Jéssica')
cumprimentaComHora('Fulano', 19)
cumprimentaComHoraEArgumentos('Ciclano', 8)
cumprimentaComHoraEArgumentos('Jonas', 15)
