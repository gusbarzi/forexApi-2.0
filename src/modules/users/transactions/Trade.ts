import { prisma } from "../../../database/PrismaClient"

interface ITrade {
    id_client: string;
    balance: number;
    dolar: number;
}

export class Trade {
    async execute({ id_client, balance, dolar}: ITrade) {
        const result = await prisma.users.update({
            where: {
                id: id_client,
            },
            data: {
                balance: balance,
                dolar: dolar
            },
            select: {
                id: true,
                balance: true,
                dolar: true
            }
        });
        return result
    }
}