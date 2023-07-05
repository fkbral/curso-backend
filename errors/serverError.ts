export class ServerError extends Error {
    public readonly statusCode = 500

    constructor(message: string = "Ocorreu um erro desconhecido no servidor... entre em contato com o suporte") {
        super(message)
        this.statusCode = 500
    }
}