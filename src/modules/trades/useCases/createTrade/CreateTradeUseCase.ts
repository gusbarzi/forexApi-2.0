import { prisma } from "../../../../database/PrismaClient";

interface ICreateDelivery {
    balance: number;
    dolar: number;
    id_client: string;
}

export class CreateTradeUseCase {
    async execute({ balance, dolar, id_client}: ICreateDelivery) {
        const trade = await prisma.transactions.create({
            data: {
                balance,
                dolar,
                id_client
            }
        });
        return trade;
    }
}