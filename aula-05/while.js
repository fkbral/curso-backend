const nomesDeUsuarios = ['Joana', 'Renata', 'Cleber', 'Zeca', 'Carla']
// const nomeDeUsuario1 = 'Joana'
// const nomeDeUsuario2 = 'Renata'

// console.log('Olá', nomesDeUsuarios[0])
// console.log('Olá', nomesDeUsuarios[1])
// console.log('Olá', nomesDeUsuarios[2])
// console.log('Olá', nomesDeUsuarios[3])

let indiceDoUsuario = 0

while (indiceDoUsuario < nomesDeUsuarios.length) {
  console.log('Olá', nomesDeUsuarios[indiceDoUsuario])
  //   indiceDoUsuario = indiceDoUsuario + 1
  indiceDoUsuario += 1
}
