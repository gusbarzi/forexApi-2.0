import { Request, Response } from 'express';
import { FindAllTransactionsUseCase } from './FindAllTransactionsUseCase';
export class FindAllTradeController {
    async handle(request: Request, response: Response) {
        const { id_client } = request;

        const findAllTransactionsUseCase = new FindAllTransactionsUseCase();

        const transactions = await findAllTransactionsUseCase.execute(id_client);

        return response.json(transactions);
    }
}