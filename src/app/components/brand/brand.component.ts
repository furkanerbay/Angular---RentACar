import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/entities/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;
  cleanBrand:Brand;

  constructor(
    private brandService: BrandService,
  ) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrand(brand:Brand) {
    if (brand == this.currentBrand)
    {
      return 'list-group-item active';
    }
    else
    {
      return 'list-group-item';
    }
  }

  getAllBrandClass()
  {
    if(!this.currentBrand)
    {
      return "list-group-item active";
    }
    else
    {
      return "list-group-item";
    }
  }

  currentClean()
  {
    this.currentBrand = this.cleanBrand
  }
}
