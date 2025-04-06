import { Shop } from "../shop/shop.model";

export interface Category {
    id: string,
    name: string,
    shops: Shop[]
}
