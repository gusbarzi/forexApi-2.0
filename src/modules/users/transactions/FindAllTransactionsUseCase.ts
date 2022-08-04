import { prisma } from "../../../database/PrismaClient";

export class FindAllTransactionsUseCase {
    async execute(id_client: string) {
        const deliveries = await prisma.users.findMany({
            where: {
                id: id_client
            },
            select: {
                transactions: true,
                balance: true,
                id: true,
                firstName: true,
                lastName: true
            },
        });

        return deliveries;
    }
}