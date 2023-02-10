const prompt = require('prompt-sync')()

let users = []
let option

function showMenu () {
  console.log('0. Sair do Sistema')
  console.log('1. Cadastrar de Usuário')
  console.log('2. Pesquisar usuário por CPF')
  console.log('3. Adicionar esporte a usuário')
  console.log('4. Deletar Usuário')
}

function registerUser () {
  const name = prompt('Entre com o nome do usuário: ')
  const cpf = prompt('Entre com o CPF do usuário: ')

  if (users.find(user => user.cpf === cpf)) {
    console.log('Erro, usuário já cadastrado')
    return
  }
  users.push({ name, cpf, sports: [] })
}

function searchUserByDocument () {
  const cpf = prompt('Entre com o CPF do usuário a ser pesquisado: ')
  const searchedUser = users.find(user => user.cpf === cpf)
  if (searchedUser) {
    console.log('Usuário encontrado com os dados:')
    console.log(`Nome: ${searchedUser.name}`)
    console.log(`Esportes: ${searchedUser.sports}`)
    return searchedUser
  }

  console.log('Usuário não encontrado')
}

function addSportToUser () {
  const foundUser = searchUserByDocument()

  if (!foundUser) {
    return
  }

  const sport = prompt('Entre com o esporte a adicionar para o usuário: ')

  const newUsers = users.map(user =>
    user.cpf === foundUser.cpf
      ? {
          ...user,
          sports: user.sports.includes(sport) ? user.sports : [...user.sports, sport]
        }
      : user
  )

  users = newUsers
}

function deleteUser () {
  const foundUser = searchUserByDocument()

  if (!foundUser) {
    return
  }

  const newUsers = users.filter(user =>
    user.cpf !== foundUser.cpf
  )

  users = newUsers
}

do {
  showMenu()
  option = parseInt(prompt('Escolha uma opção: (de 0 a 4): '))

  if (option === 1) {
    registerUser()
  } else if (option === 2) {
    searchUserByDocument()
  } else if (option === 3) {
    addSportToUser()
  } else if (option === 4) {
    deleteUser()
  }
} while (option !== 0)
