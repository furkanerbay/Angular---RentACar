import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/entities/rental';
import { ListReponseModel } from 'src/app/models/responseModel/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44304/api/"

  constructor(private httpClient:HttpClient) { }

  getRental():Observable<ListReponseModel<Rental>>
  {
    let newPath = this.apiUrl + "rentals/getall";

    return this.httpClient.get<ListReponseModel<Rental>>(newPath);

  }

}
