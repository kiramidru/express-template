import { generateHash } from "utils/bcrypt";
import * as userModel from "models/user.model";
import { ApiError } from "errors/api.error";
import { CreateUserInput } from "dto/user.dto";

export async function createUser(data: CreateUserInput) {
    const existingUser = await userModel.findUserByEmail(data.email);
    if (existingUser) {
        throw ApiError.badRequest("Email already exists.");
    }
    const hashedPassword = await generateHash(data.password);
    data = { ...data, password: hashedPassword };
    return await userModel.createUser(data);
}
