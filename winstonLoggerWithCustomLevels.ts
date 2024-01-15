import winston from 'winston'

const isProduction = process.env.NODE_ENV === 'production'

const loggingLevels = {
    erro: 0,
    alerta: 1,
    info: 2
}

const logger = winston.createLogger({
    level: isProduction ? 'alerta' : 'info',
    levels: loggingLevels,
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
    ]
}) as winston.Logger & Record<keyof typeof loggingLevels, winston.LeveledLogMethod>;

logger.info('esta é uma mensagem de informação')
logger.alerta('O sistema está prestes a ficar sem memória')
logger.erro('Ocorreu um erro crítico')