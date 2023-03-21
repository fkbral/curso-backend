import { NextFunction, Request, Response } from "express";

export const loggerMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { url, method } = request;
  const body: any = request.body;

  console.log(
    `[${method}]: ${url} ${
      Object.keys(body).length > 0 ? `BODY ${JSON.stringify(body)}` : ""
    }`
  );

  next();
};
