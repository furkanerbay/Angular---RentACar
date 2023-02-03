import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';

const routes: Routes = [
  {path:"cars",pathMatch:'full',component:CarDetailsComponent},
  {path:"cars/brand/:brandId",pathMatch:'full',component:CarDetailsComponent},
  {path:"cars/color/:colorId",pathMatch:'full',component:CarDetailsComponent},
  {path:"cars/brandandcolor/brand/:brandId/color/:colorId",pathMatch:'full',component:CarDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
