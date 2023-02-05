import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

const routes: Routes = [
  {path:"",pathMatch:'full',component:CarDetailsComponent},
  {path:"cars",pathMatch:'full',component:CarDetailsComponent},
  {path:"cars/brand/:brandId",pathMatch:'full',component:CarDetailsComponent},
  {path:"cars/color/:colorId",pathMatch:'full',component:CarDetailsComponent},
  {path:"cars/brandandcolor/brand/:brandId/color/:colorId",pathMatch:'full',component:CarDetailsComponent},
  {path:"cars/car-detail-page/:carId",pathMatch:'full',component:CarDetailPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
