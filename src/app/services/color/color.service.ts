import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/entities/color';
import { ListReponseModel } from 'src/app/models/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44304/api/";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListReponseModel<Color>>
  {
    let newPath = this.apiUrl + "color/getall";
    return this.httpClient.get<ListReponseModel<Color>>(newPath);
  }
}
