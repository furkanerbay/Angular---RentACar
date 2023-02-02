import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/entities/brand';
import { ListReponseModel } from 'src/app/models/responseModel/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44304/api/";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListReponseModel<Brand>>
  {
    let newPath = this.apiUrl + "brands/getall";
    return this.httpClient.get<ListReponseModel<Brand>>(newPath);
  }
}
