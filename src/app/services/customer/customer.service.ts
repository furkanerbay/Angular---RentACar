import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/entities/customer';
import { ListReponseModel } from 'src/app/models/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:44304/api/";

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListReponseModel<Customer>>
  {
    let newPath = this.apiUrl + "customers/getall";
    return this.httpClient.get<ListReponseModel<Customer>>(newPath);
  }
}
