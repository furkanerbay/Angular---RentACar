import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entities/color';
import { ColorResponseModel } from 'src/app/models/responseModel/colorResponseModel';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{
  colors:Color[] = [];
  currentColor:Color={id:0,name:""}

  constructor(private colorService:ColorService,private httpClient:HttpClient)
  {

  }

  ngOnInit(): void {
    this.getColors();
  }

  getColors()
  {
    this.colorService.getBrands()
    .subscribe(response =>
      {
        this.colors = response.data;
      })
  }

  setCurrentColor(color:Color)
  {
    this.currentColor = color;
  }

  getCurrentColorClass(color:Color)
  {
    if(color == this.currentColor)
    {
      return "list-group-item active";
    }
    else
    {
      return "list-group-item";
    }
  }

}
