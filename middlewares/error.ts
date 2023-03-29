import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

type ExtendedError = Error & { statusCode?: number };

export const errorMiddleware = (
  error: ExtendedError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 400;
  const printStack = process.env.NODE_ENV !== "production";
  let message = error.message

  if (error instanceof ZodError) {
    const errMessages = error.errors.map(
      ({ path, message, code }) => `[${path}]: ${code} - ${message}`
    );

    message = errMessages.join('\n')
    console.error(message)
  }

  return response.status(statusCode).json({
    status: "error",
    statusCode: statusCode,
    message,
    stack: printStack ? error.stack : undefined,
  });
};
