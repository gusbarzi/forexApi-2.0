import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUserCase";

export class CreateClientController {
    async handle(request: Request, response: Response) {

        const { firstName, lastName, email, password, balance, dolar } = request.body;

        const createClientUseCase = new CreateClientUseCase();
        const result = await createClientUseCase.execute({
            firstName,
            lastName,
            email,
            password,
            balance,
            dolar,
        })
        
        return response.json(result);
    }
}