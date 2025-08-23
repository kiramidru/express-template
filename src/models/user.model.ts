import prisma from "prisma";
import { CreateUserInput } from "services/user.service";

export async function createUser(data: CreateUserInput) {
    return await prisma.user.create({ data });
}

export async function findUserByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
}
