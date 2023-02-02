import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/entities/car';
import { CarResponseModel } from 'src/app/models/responseModel/carResponseModel';
import { CarDetailsService } from 'src/app/services/car-details/car-details.service';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  cars:Car[] = [];
  dataLoaded = false;

  carResponseModel:CarResponseModel = {
    data : this.cars,
    message : " ",
    success : true,
  };

  constructor(private carDetailsService:CarDetailsService,private httpClient : HttpClient)
  {

  }

  ngOnInit(): void {
    this.getCars();
  }


  getCars()
  {
    this.carDetailsService.getCarDetails()
    .subscribe((response) => 
    {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

}
