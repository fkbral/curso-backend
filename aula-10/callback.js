function cumprimenta () {
  return 'Olá usuário'
}

function pontosDoUsuario () {
  console.log('você tem 1000 pontos!')
}

function saldoDaCarteira () {
  console.log('você tem 10 reais!')
}

function retornaInfosDoUsuario (callback) {
  console.log(cumprimenta())
  callback()
}

retornaInfosDoUsuario(pontosDoUsuario)
retornaInfosDoUsuario(saldoDaCarteira)
