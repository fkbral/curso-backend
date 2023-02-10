const cargos = ['Professor', 'Diretor', 'Aluno']

const usuarios = [
  {
    nome: 'Fábio',
    email: 'fb20@outlook.com'
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

// solução 1
const usuariosOutlook1 = usuarios.filter((usuario) => {
  const [, dominioDoEmail] = usuario.email.split('@')
  return dominioDoEmail === 'outlook.com'
})

// solução 2
const usuariosOutlook2 = usuarios.filter(
  (usuario) => usuario.email.includes('outlook.com')
)

console.log(usuariosOutlook1)
console.log(usuariosOutlook2)
