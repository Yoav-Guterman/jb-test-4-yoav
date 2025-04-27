import Joi from "joi";

export const newOperationValidator = Joi.object({
    type: Joi.string().min(3).required(),
    metadata: Joi.object({
        amount: Joi.number().required(),
        interest: Joi.number().optional(),
        payments: Joi.number().optional()
    }).required(),
    accountNumber: Joi.string().min(4).max(14).required()
})

export const accountNumberValidator = Joi.object({
    accountNumber: Joi.string().min(4).max(14).required()
})