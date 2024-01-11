import { createSign, createVerify, generateKeyPairSync, privateDecrypt, privateEncrypt, publicDecrypt, publicEncrypt, sign } from 'node:crypto'

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
    modulusLength: 1024
})

console.log(`chave pública: ${publicKey}`)
console.log(`chave privada: ${privateKey}`)

const originalMessage = 'trabalhando com chaves pública e privada'
const encriptedMessageBuffer =  encryptMessage(originalMessage)
decryptMessage(encriptedMessageBuffer) 

const originalMessageToSign = "Essa mensagem é verificada"
const {encriptedSignedMessageBuffer, signature} = encryptSignedMessage(originalMessageToSign)
decryptSignedMessage(encriptedSignedMessageBuffer, signature)

function encryptMessage(message: string) {
    const messageBuffer = Buffer.from(message)
    const encriptedMessageBuffer = publicEncrypt(publicKey, messageBuffer)
    console.log(`A mensagem criptografada é ${encriptedMessageBuffer.toString('hex')}`)
    return encriptedMessageBuffer
}

function decryptMessage(encriptedMessageBuffer: Buffer) {
    const originalMessage = privateDecrypt(privateKey, encriptedMessageBuffer)
    console.log(`A mensagem original é "${originalMessage}"`)
}

function encryptSignedMessage(message: string) {
    const messageBuffer = Buffer.from(message)
    const encriptedSignedMessageBuffer = privateEncrypt(privateKey, messageBuffer)
    console.log(`A mensagem criptografada é ${encriptedMessageBuffer.toString('hex')}`)

    const signer = createSign('rsa-sha256')
    signer.update(message)
    const signature = signer.sign(privateKey, 'hex')

    return { encriptedSignedMessageBuffer, signature }
}

function decryptSignedMessage(encriptedMessageBuffer: Buffer, signature: string) {
    const originalMessage = publicDecrypt(publicKey, encriptedMessageBuffer)
    console.log(`A mensagem original é "${originalMessage}"`)

    const verifier = createVerify('rsa-sha256')
    verifier.update(originalMessage)
    const isVerified = verifier.verify(publicKey, signature, 'hex')

    if (isVerified) {
        console.log('Assinatura do servidor verificada com sucesso!!')
        return
    }

    console.log('Atenção, assinatura inválida!! Mensagem pode ter sido adulterada')
}

