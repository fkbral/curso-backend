import { verify } from 'jsonwebtoken'
import { config } from 'dotenv'

config()

function decodeJWT() {
    const header = new Headers()
    header.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidGVhY2hlciIsImVtYWlsIjoiZnVsYW5vQGdtYWlsLmNvbSIsImlhdCI6MTY3ODMxMDMwOH0.N5VOD7Lvly97fdJlGIBvLhmvgFueU_bWCAUlsAcK9MA')

    // const [, token] = header.get('Authorization')?.split(' ') as string[]
    const tokenWithBearer = header.get('Authorization')

    if(!tokenWithBearer) {
        return
    }

    const [, token] = tokenWithBearer.split(' ')

    console.log(token)

    const jwtSecret = process.env.JWT_SECRET ?? ''

    try {
        const decoded = verify(token, jwtSecret);
        console.log(decoded)
    } catch (error) {
        console.error('Assinatura Inválida')
    }
}

decodeJWT()


