import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const authMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {

  const { headers } = request

  const tokenWithBearer = headers.authorization

  if(!tokenWithBearer) {
      return response.status(401).send('Erro de autenticação: token não enviado')
  }

  const [, token] = tokenWithBearer.split(' ')

  const jwtSecret = process.env.JWT_SECRET ?? ''

  try {
      const decoded = verify(token, jwtSecret);
      next()
  } catch (error) {
      return response.status(401).send('Erro de autenticação: Assinatura Inválida')
  }
};
