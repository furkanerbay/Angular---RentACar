import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/entities/rental';
import { RentalResponseModel } from 'src/app/models/responseModel/rentalResponseModel';
import { ResponseModel } from 'src/app/models/responseModel/responseModel';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals : Rental[] = [];
  apiUrl = "https://localhost:44304/api/rentals/getall";

  constructor(private httpClient:HttpClient)
  {

  }

  ngOnInit(): void {
    this.getRental();
  }


  getRental()
  {
    this.httpClient.get<RentalResponseModel>(this.apiUrl)
    .subscribe((response) => this.rentals = response.data)
  }

}
