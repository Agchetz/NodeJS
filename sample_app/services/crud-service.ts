import { RequestQuery } from "@hapi/hapi";
import { PersonModel, personName } from "./interfaces";

class crudServices {
    async postService(payload: personName) {
        let person = new PersonModel(payload);
        var result = await person.save();
        return result;
    }
    async getService() {
        let person = await PersonModel.find({}, { __v: 0 }).exec();
        return person;
    }
    async getPersonByIdService(params: number) {
        let person = (await PersonModel.findById(params).exec()) as personName;
        return person;
    }
    async editPersonService(payload: personName, params: string) {
        let result = await PersonModel.findByIdAndUpdate(params, payload, { new: true });
        let person = (await PersonModel.findById(params).exec()) as personName;
        return person;
    }
    async deletePersonById(params: string) {
        let result = (await PersonModel.findByIdAndDelete(params)) as personName;
        return result;
    }
    async getqueryUser(params: string) {
        let result = (await PersonModel.findOne({ firstname: params })) as personName;
        return result;
    }
    async getpersonDetailsQuery(query: RequestQuery) {
        let password = query.password
        let result = (await PersonModel.findOne(query)) as personName;

        return result;
    }

}

export const crud_services = new crudServices();
