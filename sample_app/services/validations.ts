import Joi from "joi";

export const validateSchema = {
    payload: Joi.object({
        firstname: Joi.string().min(3).max(10).required(),
        lastname: Joi.string().min(3).max(10).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(30).required(),
        date: Joi.date().required()
    })
}

export const querySchema = {
    query: Joi.object({
        firstname: Joi.string().min(3).max(10).required(),
        password: Joi.string().min(8).max(30).required(),
    })
}

