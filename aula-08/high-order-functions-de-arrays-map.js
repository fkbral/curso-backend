const cargos = ['Professor', 'Diretor', 'Aluno']

const cargosComFlexaoFor = []
for (const cargo of cargos) {
  cargosComFlexaoFor.push(cargo + '(a)')
}

// const cargosComFlexao = cargos.map(function transformarCargos (cargo) {
// const cargosComFlexao = cargos.map(function (cargo) {
// const cargosComFlexao = cargos.map((cargo) => {
//   return cargo + '(a)'
// })

const cargosComFlexao = cargos.map((cargo) => cargo + '(a)')

console.log(cargos)
console.log(cargosComFlexaoFor)
console.log(cargosComFlexao)

const usuarios = [
  {
    nome: 'Fábio',
    email: 'fb20@gmail.com'
  },
  {
    nome: 'Josefina',
    email: 'jose_fina@hotmail.com'
  },
  {
    nome: 'Carla',
    email: 'a.carla@outlook.com'
  }
]

// const usuariosComNomeDeUsuario = usuarios.map(usuario => {
//   return {
//     nome: usuario.nome,
//     email: usuario.email,
//     nomeDeUsuario: usuario.email.split('@')[0]
//   }
// })

// const usuariosComNomeDeUsuario = usuarios.map(usuario =>
//   ({
//     nome: usuario.nome,
//     email: usuario.email,
//     nomeDeUsuario: usuario.email.split('@')[0]
//   })
// )

const usuariosComNomeDeUsuario = usuarios.map(usuario =>
  ({
    ...usuario,
    nomeDeUsuario: usuario.email.split('@')[0]
  })
)

console.log(usuariosComNomeDeUsuario)
