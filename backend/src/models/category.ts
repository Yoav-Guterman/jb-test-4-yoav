import mongoose from "../db/mongoose"
interface Shop {
    id: string,
    name: string,
    address: string,
}

interface Category {
    id: string,
    name: string,
    shops: Shop[]
}

const ShopSchema = new mongoose.Schema<Shop>({
    name: String,
    address: String,
}, {
    toObject: {
        transform: function (doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }
})

const CategorySchema = new mongoose.Schema<Category>({
    name: String,
    shops: [ShopSchema]
}, {
    toObject: {
        transform: function (doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }
})

export const CategoryModel = mongoose.model<Category>('Category', CategorySchema, 'categories')

