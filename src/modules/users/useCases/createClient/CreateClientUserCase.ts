import { hash } from 'bcrypt';
import { prisma } from '../../../../database/PrismaClient'

interface IcreateClient {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    balance: number,
    dolar: number,
}

export class CreateClientUseCase {

    async execute({ firstName, lastName,email, password, balance, dolar }: IcreateClient) {
        const clientExist = await prisma.users.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive"
                }
            }
        })

        if (clientExist) {
            throw new Error('User already exists')
        }

        const hashPassword = await hash(password, 10);

        const client = await prisma.users.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashPassword,
                balance,
                dolar,
            }
        });

        return client;
    }
}