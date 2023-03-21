import express from 'express'
import { config } from 'dotenv'
import path from 'path'
import {readFileSync} from 'fs'

interface IUser {
    name: string
    age: number
}

config()
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3300
const users: IUser[] = [
    {
        name: 'Fulano',
        age: 20
    },
    {
        name: 'Ciclano',
        age: 35
    },
]

app.get('/api', (request, response) => {
    // const homePagePath = path.join(__dirname, 'home.html')
    // const homePage = readFileSync(homePagePath)
    return response.status(200).send('<h1 style="color: red;">Hello World</h1>')
    // return response.status(200).send(homePage)
})

app.get('/api/users', (request, response) => {
    return response.json(users)
})

app.listen(port,() => {
    console.log(`Servidor rodando no endereço ${url}:${port}`)
})
