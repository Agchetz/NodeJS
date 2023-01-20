import { ResponseToolkit, ServerRoute, server } from "@hapi/hapi";
import Joi from "joi";
import { person } from "../controllers/CRUD-contoller";
import { querySchema, validateSchema } from "../services/validations";

export const routes: ServerRoute[] = [{
    method: "POST",
    path: "/login",
    options: {
        validate: validateSchema,
        auth: false,
    },
    handler: person.pesronNames,
},
{
    method: "GET",
    path: "/person",
    handler: person.getPersons
},
{
    method: "GET",
    path: "/person/{id}",
    handler: person.getPersonByIds
},
{
    method: "PUT",
    path: "/edit-person/{id}",
    options: {
        validate: {
            payload: Joi.object({
                firstname: Joi.string().optional(),
                lastname: Joi.string().optional()
            }),
        }
    },
    handler: person.editPersonValues
},
{
    method: "GET",
    path: "/personquery",
    options: {
        auth: false,
        validate: querySchema
    },
    handler: person.getpersonDetails

},
{
    method: "DELETE",
    path: "/delete-person/{id}",
    handler: person.deletePerson
}];

export const myPlugin = {
    name: 'myPlugin',
    register: async function (servers: any) {
        servers.route(routes)
    }
}
