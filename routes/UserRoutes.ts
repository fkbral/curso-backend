// import dbJson from '.././server.json'
import {Router} from 'express'
import { randomUUID } from 'crypto'
import { writeFile } from 'fs/promises'
import path from 'path'
import { readFileSync } from 'fs'

type User = {
    id: string
    name: string
    age: number
}

// interface ICreateUserDTO {
//     name: string
//     age: string
// }

type CreateUserDTO = Omit<User, "id"> 

const dbJsonPath = path.resolve(process.cwd(), 'server.json')
const dbJsonRaw = readFileSync(dbJsonPath)
const dbJson = JSON.parse(dbJsonRaw.toString())
const users: User[] = dbJson.users
const userRoutes = Router()

userRoutes.get('/api/users', (request, response) => {
    return response.json(users)
})

userRoutes.post('/api/users', async (request, response) => {
    const {name, age}: CreateUserDTO = request.body

    if (!name || age < 0) {
        const errMessage = 'O usuário a ser criado precisa de nome e idade'
        return response.status(400).send(errMessage)
    }

    const user = { id: randomUUID(), name, age }

    users.push(user)

    await writeFile(dbJsonPath, JSON.stringify({...dbJson, users}))

    return response.status(201).json(user)
})

userRoutes.delete('/api/users/:id', async (request, response) => {
    const { id } = request.params

    if (!id) {
        const errMessage = 'O usuário a ser deletado precisa de um id'
        return response.status(400).send(errMessage)
    }

    const foundUser = users.find(user => user.id === id)

    if (!foundUser) {
        const errMessage = `Usuário com id ${id} não foi encontrado`
        return response.status(400).send(errMessage)
    }

    const updatedUsers = users.filter(user => user.id !== id)

    await writeFile(dbJsonPath, JSON.stringify(
        {...dbJson, users: updatedUsers}
    ))

    return response.status(204).json()
})

// module.exports = {userRoutes}
export {userRoutes}
