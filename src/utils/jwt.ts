import jwt from "jsonwebtoken";

interface Payload {
    userId: string;
    email: string;
    role: string;
    isVerified: boolean;
    iat?: number;
    exp?: number;
}

export function signToken(payload: Payload, expriresIn = "1h") {
    return jwt.sign(payload, process.env.JWT_SECRET!, { expriresIn });
}

export function validateToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET!);
}
