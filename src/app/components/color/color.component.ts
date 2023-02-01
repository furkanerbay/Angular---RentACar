import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entities/color';
import { ColorResponseModel } from 'src/app/models/responseModel/colorResponseModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{
  colors:Color[] = [];
  apiUrl = "https://localhost:44304/api/color/getall";

  constructor(private httpClient:HttpClient)
  {

  }

  ngOnInit(): void {
    this.getColors();
  }

  getColors()
  {
    this.httpClient.get<ColorResponseModel>(this.apiUrl)
    .subscribe((response) => this.colors = response.data)
  }

}
