import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Car } from 'src/app/models/entities/car';
import { CarDetailsService } from 'src/app/services/car-details/car-details.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  currentCar:Car;
    
    imageUrl = "https://localhost:44304";

  constructor(
    private activatedRoute: ActivatedRoute,
    private carDetailsService: CarDetailsService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.activatedRoute.params.subscribe((params) => {
      //let { colorId, brandId } = params;
      //colorId = +(colorId || 0);
      //brandId = +(brandId || 0);
      //console.log(params)

      //if (colorId > 0 && brandId > 0) {
      //  this.getCarsByColorAndBrand(params['colorId'], params['brandId']);
      //} else if (brandId > 0) {
      //  this.getCarsByBrand(brandId);
      //} else if (colorId) {
      //  this.getCarsByColor(colorId);
      //} else {
      //  this.getCars();
      //}

      if(params["brandId"])
      {
        this.getCarsByBrand(params["brandId"])
      }
      
      else if(params["colorId"])
      {
        this.getCarsByColor(params["colorId"]);
      }

      else if(params["colorId"] && params["brandId"])
      {
        this.getCarsByColorAndBrand(params["colorId"] , params["brandId"])
      }

      else
      {
        this.getCars();
      }

    });
  }

  getCars() {
    this.carDetailsService.getCarDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carDetailsService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carDetailsService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorAndBrand(colorId: number, brandId: number) {
    this.carDetailsService
      .getCarsByColorAndBrand(colorId, brandId)
      .subscribe((response) => {
        this.cars = response.data;
        this.dataLoaded = true;
      });
  }

  getCarImage(car:Car)
  {
    if(car.imagePath == null)
    {
      let path = this.imageUrl + "/Upload/Images/Default.jpg";
      return path;
    }
    else
    {
      let path = this.imageUrl + "/Upload/Images/" + car.imagePath;
      return path;
    }
  }
}
