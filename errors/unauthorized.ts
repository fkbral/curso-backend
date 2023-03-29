export class UnauthorizedError extends Error {
    public readonly statusCode = 401

    constructor(message: string) {
        super(message)
        this.statusCode = 401
    }
}