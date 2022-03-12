import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: OrderDetailsService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu');
    if (this.getMenuId)
    {
      if (this.getMenuId <= 3)
      {
        this.menuData = this.service.foodBreakfast.filter((value)=>{
        return value.id == this.getMenuId;
        });
      }
      else if (this.getMenuId <= 6)
      {
        this.menuData = this.service.foodLunch.filter((value)=>{
          return value.id == this.getMenuId;
          });
      }
      else if (this.getMenuId <= 9)
      {
        this.menuData = this.service.foodDinner.filter((value)=>{
          return value.id == this.getMenuId;
          });
      }
      else if (this.getMenuId <= 12)
      {
        this.menuData = this.service.foodDessert.filter((value)=>{
          return value.id == this.getMenuId;
        });
      }
    }
  }
}
