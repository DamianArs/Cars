import { CarResolveService } from './car-resolve.service';
import { CarDetailsComponent } from './car-details/car-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';

const routes: Routes = [
  {
    path: 'cars/:id',
    component: CarDetailsComponent,
    resolve: {car: CarResolveService}
  },
  {
    path: '',
    redirectTo: '/cars',
    pathMatch: 'full',
  },
  {
    path: 'cars',
    component: CarsListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
