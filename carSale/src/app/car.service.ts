import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './model';
import { HttpClient } from '@angular/common/http';
import 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CarService {
server: string = 'http://localhost:3000/cars';
  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]>{
   return this.http.get<Car[]>(this.server);
  }
  getCar(id: number): Observable<Car>{
   return this.http.get<Car>(this.server + '/' + id);
  }
  addCar(data):Observable<Car>{
    return this.http.post<Car>(this.server, data);
  }
  updateCar(id: number, data): Observable<Car>{
    return this.http.put<Car>(this.server + '/' + id, data);
   }
  removeCar(id: number): Observable<Car>{
    return this.http.delete<Car>(this.server + '/' + id);
   }
}
