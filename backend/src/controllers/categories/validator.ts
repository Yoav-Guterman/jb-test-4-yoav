import Joi from "joi";

export const categoryIdValidator = Joi.object({
    categoryId: Joi.string().hex().length(24).required()
})

export const newShopValidator = Joi.object({
    name: Joi.string().min(3).required(),
    address: Joi.string().min(3).required()
})

export const removeShopValidator = Joi.object({
    shopId: Joi.string().hex().length(24).required(),
    categoryId: Joi.string().hex().length(24).required()
})

// export const deleteCommentParamsValidator = Joi.object({
//     postId: Joi.string().hex().length(24).required(),
//     commentId: Joi.string().hex().length(24).required()
// })