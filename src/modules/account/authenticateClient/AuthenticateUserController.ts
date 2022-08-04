import { Request, Response } from "express";
import { AuthenticateUserCase } from "./AuthenticateUserCase";

export class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;
        
        const authenticateClientUserCase = new AuthenticateUserCase()
        const result = await authenticateClientUserCase.execute({
            email,
            password
        })
        return response.json(result);
    }
}