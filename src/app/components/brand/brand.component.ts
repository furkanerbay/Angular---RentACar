import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entities/brand';
import { BrandResponseModel } from 'src/app/models/responseModel/brandResponseModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit{
  brands:Brand[] = [];
  apiUrl = "https://localhost:44304/api/brands/getall";

  brandResponseModel : BrandResponseModel = {
    data : this.brands,
    message : "",
    success : true
  }

  constructor(private httpClient:HttpClient)
  {

  }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
    this.httpClient.get<BrandResponseModel>(this.apiUrl)
    .subscribe((response) => this.brands = response.data)
  }


}
