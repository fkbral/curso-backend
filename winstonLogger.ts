import winston from 'winston'

const isProduction = process.env.NODE_ENV === 'production'
const { combine, json, timestamp, printf, cli, errors } = winston.format

const warningFilter = winston.format((info, _opts) => info.level === 'warn' ? info : false)

const logger = winston.createLogger({
    level: isProduction ? 'info' : 'debug',
    defaultMeta: {service: 'email-service'},
    format: combine(
        errors({stack: true}),
        timestamp({format: `DD/MM/YYYY hh:mm`}),
        json(),
        // printf((logMessage => `${logMessage.level.toUpperCase()}: ${logMessage.message} - ${logMessage.timestamp}`))
        ),
    exceptionHandlers: [new winston.transports.File({filename: 'exceptions.log'})],
    rejectionHandlers: [new winston.transports.File({filename: 'rejections.log'})],
    transports: [
        new winston.transports.Console({format: json()}),
        new winston.transports.File({filename: 'log.json'}),
        new winston.transports.File({
            filename: 'log-warnings.log',
            format: combine(
                warningFilter(),
                timestamp({format: `DD/MM/YYYY hh:mm`}),
                json()
            )
        }),
    ],
})

logger.debug('esta é uma mensagem de debug')
logger.info('esta é uma mensagem de informação')
// logger.warn('O sistema está prestes a ficar sem memória')
logger.warn('O sistema está próximo ao limite da CPU')
logger.error('Ocorreu um erro crítico')


// Uma nova requisição chegando
// dentro da lógica do useCase/controller

const loggerWithUserId = logger.child({
    userId: '86f43c5f-9b70-4961-975e-215ec0870568'
})

loggerWithUserId.info('Requisição completada com sucesso')

// throw new Error('Ocorreu um erro inesperado na aplicação')

Promise.reject('Erro na promise')