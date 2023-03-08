import { sign, verify } from 'jsonwebtoken'
import { config } from 'dotenv'

config()
const jwtSecret = process.env.JWT_SECRET ?? ''
const user1Token = sign({role: 'teacher', email: 'fulano@gmail.com'}, jwtSecret)
const user2Token = sign({role: 'student', email: 'ciclano@outlook.com'}, jwtSecret)
console.log(user1Token)
try {
    const decoded = verify(user1Token, jwtSecret);
    console.log(decoded)

    const decoded2 = verify(user2Token, jwtSecret);
    console.log(decoded2)  
} catch (error) {
    console.error('Assinatura Inválida')
}

// console.log(user1Token)

// console.log(
//     atob('eyJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY3ODMwOTI2NX0')
// )

console.log(
    Buffer.from(
        'eyJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY3ODMwOTI2NX0', 'base64'
    )
    .toString()
)