import Joi from "joi";

export const postValidator = Joi.object(
    {
        userId: Joi.number().min(1).max(10).required().messages({}),
        title: Joi.string().max(25).pattern(/^[a-zA-Z ,!:-]+$/).required().messages({
            "string.pattern.base": "only words allowed and symbols ,!:-",
            "string.required.base": "title is required",
            "string.empty": "title is required"
        }),
        body: Joi.string().max(255).pattern(/^[a-zA-Z %.,@()!:-]+$/).required().messages({
            "string.pattern.base": "only words allowed and symbols %.,@()!:-",
            "string.required.base": "post text is required",
            "string.empty": "post text is required"
        })
    }
)