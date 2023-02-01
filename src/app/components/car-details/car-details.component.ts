import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/entities/car';
import { CarResponseModel } from 'src/app/models/responseModel/carResponseModel';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  cars:Car[] = [];
  apiUrl = "https://localhost:44304/api/cars/getbycardetails"

  carResponseModel:CarResponseModel = {
    data : this.cars,
    message : " ",
    success : true
  };

  constructor(private httpClient : HttpClient)
  {

  }

  ngOnInit(): void {
    this.getCars();
  }


  getCars()
  {
    this.httpClient.get<CarResponseModel>(this.apiUrl)
    .subscribe((response) => {this.cars = response.data});
  }

}
