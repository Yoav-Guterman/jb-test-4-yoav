import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category/category.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Shop } from '../models/shop/shop.model';
import { Draft } from '../models/shop/draft.model';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(
    public httpClient: HttpClient
  ) { }

  async getAllCategories(): Promise<Category[]> {
    const observable = this.httpClient.get<Category[]>(`${environment.restServerUrl}/shops/categories`)
    const list = firstValueFrom(observable)
    return list
  }

  async getShopsPerCategory(categoryId: string): Promise<Shop[]> {
    const observable = this.httpClient.get<Shop[]>(`${environment.restServerUrl}/shops/category/${categoryId}`)
    const list = firstValueFrom(observable)
    return list
  }

  async createShop(draft: Draft, categoryId: string): Promise<Shop> {
    const observable = this.httpClient.post<Shop>(`${environment.restServerUrl}/shops/${categoryId}`, draft)
    const newWebsite = firstValueFrom(observable)
    return newWebsite
  }

  async removeShop(shopId: string, categoryId: string): Promise<boolean> {
    const observable = this.httpClient.delete<boolean>(`${environment.restServerUrl}/shops/${categoryId}/${shopId}`)
    const isDeleted = firstValueFrom(observable)
    return isDeleted
  }
}
