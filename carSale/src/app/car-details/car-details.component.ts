import { Car } from './../model';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
 car: Car;
 carForms:FormGroup;
  constructor(private carService: CarService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loadCar();
    this.carForms = this.buildCarsForms();

  }
  buildCarsForms(){
    return this.formBuilder.group({
      model: [this.car.model,Validators.required],
    plate:  [this.car.plate,Validators.required],
    productionDate:  [this.car.productionDate,Validators.required],
    firstName: [this.car.firstName,Validators.required],
    surname: [this.car.surname,Validators.required],
    cost:  [this.car.cost ,Validators.required],
    damage: this.car.damage,
    })
  }
loadCar(){
 this.car = this.route.snapshot.data['car']
}
updateCar(){
  this.carService.updateCar (this.car.id, this.carForms.value).subscribe(()=>{
    this.router.navigate(['/cars']);
    this.carForms.reset();
  })
}
}
