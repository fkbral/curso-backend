import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto'

function hash(originalText: string) {
    return createHash('sha256').update(originalText).digest('hex')
}

function saltAndHash(originalText: string) {
    const salt = randomBytes(20).toString('hex')
    const hashWithSalt = scryptSync(originalText, salt, 64).toString('hex')
    const hashedText = `${salt}:${hashWithSalt}`
    return hashedText
}

const users = [
    {
        email: 'user1@test.com',
        hashedPassword: saltAndHash('senha10')
    },
    {
        email: 'fulano@outlook.com',
        hashedPassword: saltAndHash('aishgjishagipha')
    }
]

function login(email:string, password: string) {
    const user = users.find(user => user.email = email )
    if(!user) {
        console.log('Email e/ou senha incorretos')
        return
    }

    const [salt, passwordSuffix] = user.hashedPassword.split(":")
    const hashedPassword = 
        scryptSync(password, salt, 64)
    const hashedPasswordSuffix = 
        Buffer.from(passwordSuffix, 'hex')

    const match = timingSafeEqual(hashedPassword, hashedPasswordSuffix)
    
    if(match) {
        console.log('Logado com sucesso!')
        return
    }

    console.log('Email e/ou senha incorretos')
}

const input = "teste1234"

const senhasFracas = [
    "teste123",
    "teste1234",
    "teste",
    "senha123"
]

const senhasFracasComHash = senhasFracas.map(senha => hash(senha))

const hashedInput = hash(input)
// console.log({input})
// console.log({hashedInput})

const senhaFoiQuebrada =  senhasFracasComHash.includes(hashedInput)

// if (senhaFoiQuebrada) {
//     console.log('Cuidado, sua senha pertence a um dicionário de senhas comuns, por favor escolha uma senha mais forte!')
// }

login('user1@test.com', 'senha10')

