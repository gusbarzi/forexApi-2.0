import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/PrismaClient";

interface IAuthenticateClient {
    email: string;
    password: string;
}

export class AuthenticateUserCase {
    async execute({ email, password }: IAuthenticateClient) {

        const client = await prisma.users.findFirst({
            where: {
                email
            }
        });

        const clientData = {
            id: client?.id,
            firstName: client?.firstName,
            lastName: client?.lastName,
            email: client?.email,
            balance: client?.balance,
            dolar: client?.dolar
        }

        if (!client) {
            throw new Error("Username or password invalid!");
        };

        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch) {
            throw new Error("Username or password invalid!");
        };

        const token = sign({ email }, "019acc25a4e242bb55ad489832ada12d", {
            subject: client.id,
            expiresIn: "1d"
        });

        return { clientData, token};
    };
};