import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/entities/carImage';
import { ListReponseModel } from 'src/app/models/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44304/api/';
  constructor(private httpClient: HttpClient) {}

  getByCarId(carId: number): Observable<ListReponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getbycarid?carId=' + carId;
    return this.httpClient.get<ListReponseModel<CarImage>>(newPath);
  }
}
