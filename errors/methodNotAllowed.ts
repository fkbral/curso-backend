export class MethodNotAllowedError extends Error {
    public readonly statusCode = 405

    constructor(message: string) {
        super(message)
        this.statusCode = 405
    }
}