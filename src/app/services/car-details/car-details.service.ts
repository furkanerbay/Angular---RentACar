import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/entities/car';
import { ListReponseModel } from 'src/app/models/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {
  apiUrl = "https://localhost:44304/api/";

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListReponseModel<Car>>
  {
    let newPath = this.apiUrl + "cars/getbycardetails";
    return this.httpClient.get<ListReponseModel<Car>>(newPath);
  }
}
