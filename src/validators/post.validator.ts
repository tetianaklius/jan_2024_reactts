import Joi from "joi";

export const postValidator = Joi.object(
    {
        user_id: Joi.number().min(0).max(10).required().messages({}),
        title: Joi.string().pattern(/^w$/).required().messages({}),
        body:Joi.string().pattern(/^w$/).required().messages({})

    }
)