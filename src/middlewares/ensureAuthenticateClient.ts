import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPaylad {
    sub: string;
    token: string | undefined;
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        response.status(401).json({
            message: 'Token missing',
        });
    }

    const [, token] = authHeader?.split(" ");

    try {
        const { sub } =  verify(token, "019acc25a4e242bb55ad489832ada12d") as unknown as IPaylad;
        
        request.id_client = sub

        return next();
    } catch (err) {
        response.status(401).json({
            message: 'Invalid token!',
        });
        console.log(err)
    }
}