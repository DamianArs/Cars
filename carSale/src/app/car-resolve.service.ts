import { CarService } from './car.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Car } from './model';

@Injectable({
  providedIn: 'root'
})
export class CarResolveService implements Resolve<Car>{

  constructor(private carsService: CarService) { }
  resolve(route: ActivatedRouteSnapshot){
    return this.carsService.getCar(route.params['id']);
  }
}
