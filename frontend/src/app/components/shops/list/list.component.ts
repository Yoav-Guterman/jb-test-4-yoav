import { Component, OnInit, signal } from '@angular/core';
import { Category } from '../../../models/category/category.model';
import { Shop } from '../../../models/shop/shop.model';
import { ShopsService } from '../../../services/shops.service';
import { SingleComponent } from '../single/single.component';

@Component({
  selector: 'app-list',
  imports: [SingleComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  categories = signal<Category[]>([]);
  shops = signal<Shop[]>([]);

  constructor(
    public shopsService: ShopsService,
  ) { }

  async ngOnInit(): Promise<void> {
    // Load only regions when component initializes
    const categoriesList = await this.shopsService.getAllCategories();
    this.categories.set(categoriesList);
  }

  async selectCategory(event: Event): Promise<void> {
    const categoryId = (event.target as HTMLSelectElement).value;
    console.log("Selected category ID:", categoryId);

    if (categoryId) {
      const filteredShops = await this.shopsService.getShopsPerCategory(categoryId);
      console.log("Filtered shops received:", filteredShops);

      this.shops.set(filteredShops);
      console.log("Shops signal after update:", this.shops());

      // Check the length explicitly
      console.log("Number of shops:", this.shops().length);
    } else {
      this.shops.set([]);
      console.log("Shops cleared");
    }
  }

}
