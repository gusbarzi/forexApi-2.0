import { Request, Response } from "express";
import { Trade } from "./Trade";

export class TradeController {
    async handle(request: Request, response: Response) {
        const { id_client } = request;
        const { balance, dolar } = request.body;

        const newTrade = new Trade();

        const trade = await newTrade.execute({
            id_client,
            balance,
            dolar
        });

        response.json(trade);
    }
}