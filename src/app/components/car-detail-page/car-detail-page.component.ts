import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/entities/car';
import { CarImage } from 'src/app/models/entities/carImage';
import { CarDetailsService } from 'src/app/services/car-details/car-details.service';
import { CarImageService } from 'src/app/services/car-image/car-image.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css'],
})
export class CarDetailPageComponent implements OnInit {
  carDetail!: Car;
  carImages: CarImage[];
  currentImage: CarImage;
  imageUrl = 'https://localhost:44304';

  currentCar: Car;

  constructor(
    private carDetailsService: CarDetailsService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const carId = +params['carId'];
      this.getCarByID(carId);
      this.getImageByCarId(carId);
    });
  }

  getCarByID(carId: number) {
    this.carDetailsService.getCarById(carId).subscribe((response) => {
      this.carDetail = response.data;
    });
  }

  getImageByCarId(carId: number) {
    this.carImageService.getByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getButtonClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'active';
    } else {
      return '';
    }
  }

  getCurrentImageClass(image: CarImage) {
    if (this.carImages[0] == image) {
      return 'carousel-item active';
    } else {
      return 'carousel-item ';
    }
  }

  setCurrentImageClass(image: CarImage) {
    this.currentImage = image;
  }

  getCarImage(carImage: CarImage, carId: number) {
    if (carImage.carId == 0) {
      let path = this.imageUrl + '/Upload/Images/Default.jpg';
      return path;
    } else {
      let path = this.imageUrl + '/Upload/Images/' + carImage.imagePath;
      return path;
    }
  }
}
