import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private service: OrderDetailsService) { }
  foodDataBreakfast:any;
  foodDataLunch:any;
  foodDataDinner:any;
  foodDataDessert:any;
  ngOnInit(): void {
    this.foodDataBreakfast = this.service.foodBreakfast;
    this.foodDataLunch = this.service.foodLunch;
    this.foodDataDinner = this.service.foodDinner;
    this.foodDataDessert = this.service.foodDessert;
  }

}
