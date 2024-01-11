import { randomBytes, createCipheriv, createDecipheriv } from 'node:crypto'

const key = randomBytes(32)
const iv = randomBytes(16)

function encryptMessage(message: string) {
    const cipher = createCipheriv('aes256', key, iv)
    const encripted = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex')
    console.log(`A mensagem criptografada é ${encripted}`)
    return encripted
}

function decryptMessage(encriptedMessage: string) {
    const decipher = createDecipheriv('aes256', key, iv)    
    const originalMessage = decipher.update(encriptedMessage, 'hex', 'utf-8') + decipher.final('utf-8')
    console.log(`A mensagem original é ${originalMessage}`)
}

const encripted = encryptMessage('Olá turma de backend')
decryptMessage(encripted)