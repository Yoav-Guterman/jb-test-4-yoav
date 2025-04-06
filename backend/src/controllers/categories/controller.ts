import { NextFunction, Request, Response } from "express";
import { CategoryModel } from "../../models/category";

export async function getAllCategories(req: Request, res: Response, next: NextFunction) {
    try {
        const categories = await CategoryModel.find()
        res.json(categories.map(doc => doc.toObject()))
    } catch (e) {
        next(e)
    }
}

export async function getAllShops(req: Request, res: Response, next: NextFunction) {
    try {
        const categories = await CategoryModel.find();
        res.json(categories.map(doc => doc.toObject().shops))
    } catch (e) {
        next(e)
    }
}

export async function getShopByCategory(req: Request<{ categoryId: string }>, res: Response, next: NextFunction) {
    try {
        const categoryId = req.params.categoryId
        const category = await CategoryModel.findOne({ _id: categoryId })
        res.json(category.toObject().shops)
    } catch (e) {
        next(e)
    }
}

export async function createShop(req: Request<{ categoryId: string }, {}, {}>, res: Response, next: NextFunction) {
    try {
        const categoryId = req.params.categoryId

        const category = await CategoryModel.findByIdAndUpdate(categoryId, {
            $push: {
                shops: { ...req.body }
            }
        }, {
            new: true
        })

        res.json(category.toObject())

    } catch (e) {
        next(e)
    }
}

export async function removeShop(req: Request<{ categoryId: string, shopId: string }>, res: Response, next: NextFunction) {
    try {
        const { categoryId, shopId } = req.params

        const category = await CategoryModel.findByIdAndUpdate(categoryId, {
            $pull: {
                shops: { _id: shopId }
            }
        }, {
            new: true
        })

        res.json(category.toObject())

    } catch (e) {
        next(e)
    }
}