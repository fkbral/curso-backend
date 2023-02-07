// const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Zeca', 'Rubens', 'Josué', 'Natália', 'Bianca']
const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Josué', 'Natália', 'Bianca']

// Solução 1
// let encontrouUsuario = false
// let atingiuFimDaLista = false
// let indiceDoUsuario = 0

// while (!encontrouUsuario && !atingiuFimDaLista) {
//   const usuarioAtual = listaDeContatos[indiceDoUsuario]
//   if (usuarioAtual.startsWith('Z')) {
//     encontrouUsuario = true
//     console.log(`Usuário encontrado: ${usuarioAtual}`)
//   }
//   indiceDoUsuario = indiceDoUsuario + 1

//   if (indiceDoUsuario === listaDeContatos.length) {
//     atingiuFimDaLista = true
//     console.log('Usuário não foi encontrado')
//   }
// }

// Solução 2
// let indiceDoUsuario = 0

// while (true) {
//   const usuarioAtual = listaDeContatos[indiceDoUsuario]
//   if (usuarioAtual.startsWith('Z')) {
//     console.log(`Usuário encontrado: ${usuarioAtual}`)
//     break
//   }
//   indiceDoUsuario = indiceDoUsuario + 1

//   if (indiceDoUsuario === listaDeContatos.length) {
//     console.log('Usuário não foi encontrado')
//     break
//   }
// }

// solução 3
let encontrouUsuarioOuPercorreuLista = false
let indiceDoUsuario = 0

while (!encontrouUsuarioOuPercorreuLista) {
  const usuarioAtual = listaDeContatos[indiceDoUsuario]
  if (usuarioAtual.startsWith('Z')) {
    encontrouUsuarioOuPercorreuLista = true
    console.log(`Usuário encontrado: ${usuarioAtual}`)
  }
  indiceDoUsuario = indiceDoUsuario + 1

  if (indiceDoUsuario === listaDeContatos.length) {
    encontrouUsuarioOuPercorreuLista = true
    console.log('Usuário não foi encontrado')
  }
}
