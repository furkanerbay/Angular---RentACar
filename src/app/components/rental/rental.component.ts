import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/entities/rental';
import { ResponseModel } from 'src/app/models/responseModel/responseModel';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals : Rental[] = [];

  constructor(private rentalService:RentalService,private httpClient:HttpClient)
  {

  }

  ngOnInit(): void {
    this.getRental();
  }


  getRental()
  {
    this.rentalService.getRental().subscribe((response) =>
    {
      this.rentals = response.data;
    })
  }

}
