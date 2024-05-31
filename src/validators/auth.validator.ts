import Joi from "joi";

export const authValidator = Joi.object({
    username: Joi.string().min(1).max(25).pattern(/^[a-zA-Z1-9]+$/).required().messages({
        "string.pattern.base": "only letters and numbers allowed, without spaces",
        "string.required.base": "username is required",
        "string.empty": "username is required"
    }),
    password: Joi.string().min(1).max(15).pattern(/^[a-zA-Z1-9!*-]+$/).required().messages({
        "string.pattern.base": "only letters, numbers and symbols !*- allowed, without spaces",
        "string.required.base": "password is required",
        "string.empty": "password is required"
    })
})