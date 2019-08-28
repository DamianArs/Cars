
import { CarService } from './../car.service';
import { CostsComponent } from './costs/costs.component';
import { Car } from './../model';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild('costsRef')
  costsRef: CostsComponent;
  public totalCosts: number = 0;
  public costBrutto: number = 0;
  cars: Car[] = [];
  carForms:FormGroup;
  constructor(private serwis: CarService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loadCars();
    this.carForms = this.buildCarsForms();

  }
  buildCarsForms(){
    return this.formBuilder.group({
      model: ['',Validators.required],
    plate:  ['',Validators.required],
    productionDate:  ['',Validators.required],
    firstName: ['',Validators.required],
    surname: ['',Validators.required],
    cost:  ['',Validators.required],
    damage: false,
    })
  }
  ngAfterViewInit(){

  }

  countTotalCost():void{
    this.totalCosts = this.cars
    .map((el)=> el.cost)
    .reduce((prev, next)=>prev+next);
  }

  loadCars(){
    this.serwis.getCars().subscribe(data=>{
      this.cars = data;
      this.countTotalCost();

    })
  }
  add(){
    this.serwis.addCar(this.carForms.value).subscribe(()=>{
      this.loadCars();
      this.carForms.reset();
    })
  }
  remove(car: Car, event){
    event.stopPropagation();
    this.serwis.removeCar(car.id).subscribe(()=>{
      this.loadCars();
    })
  }
}
