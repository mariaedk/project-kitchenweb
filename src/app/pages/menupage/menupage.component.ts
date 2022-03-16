import { ViaCepApiService } from './../../services/via-cep-api.service';
import { ViaCep } from './../../models/via-cep';
import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {

  formContato: ViaCep = {};

  showForm = new Subject<boolean>();

  cepInput: string = '';

  constructor(private param: ActivatedRoute, private service: OrderDetailsService, private cepService: ViaCepApiService) { }
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

  getViaCEP(cep: FocusEvent)
  {
    if ((cep.target as HTMLInputElement)?.value)
    {
      let inputCEP = (cep.target as HTMLInputElement)?.value;

      console.log(inputCEP);

      const cepResponse = this.cepService.getCep(inputCEP);

      cepResponse.subscribe(
        (cepModel) =>
        {
          this.formContato = cepModel;
          this.showForm.next(true);
        }
      )
    }
  }
}
