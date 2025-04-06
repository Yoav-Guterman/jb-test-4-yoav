import { Router } from "express";
import { createShop, getAllCategories, getAllShops, getShopByCategory, removeShop } from "../controllers/categories/controller";
import validation from "../middlewares/validation";
import { categoryIdValidator, newShopValidator, removeShopValidator } from "../controllers/categories/validator";
import paramsValidation from "../middlewares/params-validation";

const shopsRouter = Router()

shopsRouter.get('/', getAllShops)
shopsRouter.get('/categories', getAllCategories)
shopsRouter.get('/category/:categoryId', paramsValidation(categoryIdValidator), getShopByCategory)
shopsRouter.post('/:categoryId', paramsValidation(categoryIdValidator), validation(newShopValidator), createShop)
shopsRouter.delete('/:categoryId/:shopId', paramsValidation(removeShopValidator), removeShop)

export default shopsRouter