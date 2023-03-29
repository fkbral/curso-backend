export class BadRequestError extends Error {
    public readonly statusCode = 400

    constructor(message: string) {
        super(message)
        this.statusCode = 400
    }
}