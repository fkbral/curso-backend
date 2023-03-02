//objetos
// interface User {
//     nome: string
//     email: string
//     idade?: number
// }

type Professor = {
    nome: string
    email: string
    cpf: string
    endereco: {
        rua: string,
        complemento: string,
        cep: string
    },
}

type AlunoRemoto = {
    nome: string
    email: string
    telefone: string
}

type InterseccaoAlunoProfessor = Professor & AlunoRemoto

const intersect: InterseccaoAlunoProfessor =  {
    endereco: {
        cep: '14215',
        complemento: '213',
        rua: 'Rua X'
    },
    cpf: '123.456.789-01',
    email: 'x',
    nome: 'x',
    telefone: '99123-3412'
}

type User = {
    nome: string
    email: string
    idade?: number
} | null

const usuarioLogado = {
    nome: 'Fulano',
    email: 'fulano@outook.com',
    idade: 21
}

const usuario: User = null

// const usuarioLogado2 : typeof usuarioLogado = {
const usuarioLogado2 : User = {
    nome: 'Ciclano',
    email: 'ciclano@gmail.com',
}

// array
const bancoDeUsuarios: User[] = []
bancoDeUsuarios.push(usuarioLogado, usuarioLogado2)

console.log(bancoDeUsuarios)

// tuplas
const userData: [string, boolean] = ['867b15ae-b684-4fd0-9b5e-1d9d4dea34ae', true]

