import { Request, ResponseToolkit } from '@hapi/hapi';
import { personName } from "../services/interfaces";
import { sign } from "jsonwebtoken";
import { crud_services } from '../services/crud-service';
import bcrypt from "bcrypt"
require("dotenv").config({ path: ".env" });

class personData {
    async pesronNames(request: Request, h: ResponseToolkit) {
        try {
            let payload = request.payload as personName
            let data = {
                email: payload.email,
                password: payload.password
            };
            await crud_services.postService(payload)
            const token = sign(data, process.env.SECRET_KEY!, { expiresIn: "1h" });
            return h.response(token);
        } catch (error) {
            return h.response(error as string).code(500);
        }
    }

    async getPersons(request: Request, h: ResponseToolkit) {
        try {
            let token = request.headers.authorization;
            token = token.split(" ")[1];
            let result = await crud_services.getService();
            return h.response(result);
        } catch (error) {
            return h.response(error as string).code(500);
        }
    }

    async getPersonByIds(request: Request, h: ResponseToolkit) {
        try {
            let params = request.params.id;
            let result = await crud_services.getPersonByIdService(params);
            return h.response(result);
        } catch (error) {
            return h.response(error as string).code(500);
        }
    }

    async editPersonValues(request: Request, h: ResponseToolkit) {
        try {
            let payload = request.payload as personName;
            let params = request.params.id;
            let result = await crud_services.editPersonService(payload, params);
            return h.response(result);
        } catch (error) {
            return h.response(error as string).code(500);
        }
    }

    async deletePerson(request: Request, h: ResponseToolkit) {
        try {
            let params = request.params.id;
            let result = await crud_services.deletePersonById(params);
            return h.response(result);
        } catch (error) {
            return h.response(error as string).code(500);
        }
    }
    async getpersonDetails(request: Request, h: ResponseToolkit) {
        try {
            let query = request.query;
            const user: any = await crud_services.getqueryUser(query.firstname);
            let compare = await bcrypt.compare(query.password, user.password)
            console.log(compare, "got user");
            if (compare) {
                return user;
            } else {
                return h.response("invalid credentials").code(401);
            }
        } catch (error) {
            return h.response(error as string).code(500);
        }
    }
}

export const person = new personData();
