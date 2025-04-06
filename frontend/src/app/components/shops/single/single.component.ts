import { Component, input, output } from '@angular/core';
import { Shop } from '../../../models/shop/shop.model';
import { ShopsService } from '../../../services/shops.service';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})


export class SingleComponent {

  constructor(
    public shopsService: ShopsService,
  ) { }

  shop = input<Shop>()
  deletedShop = output<string>()

}
