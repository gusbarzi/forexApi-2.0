import { CreateTradeUseCase } from './CreateTradeUseCase';
import { Request, Response } from 'express';
export class CreateTradeController {
    async handle(request: Request, response: Response) {

        const { balance, dolar } = request.body;
        const { id_client } = request;

        const cretateTradeUseCase = new CreateTradeUseCase();

        const trade = await cretateTradeUseCase.execute({
            id_client,
            balance,
            dolar
        });

        return response.json(trade);
    }
}