import { Request, ResponseToolkit } from "@hapi/hapi";
import { verify } from "jsonwebtoken";
require("dotenv").config({ path: ".env" });


export async function verify_token(request: Request, h: ResponseToolkit) {
    try {
        const authorization_token = request.headers.authorization;
        let token = authorization_token.split(" ")[1];
        const verified = verify(token, process.env.SECRET_KEY!);
        return { credentials: verified, isValid: true };
    } catch (error) {
        return h.response("unauthorizedbro").code(401);
    }

}