import { CoreModule } from './core-module/core-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CostsComponent } from './cars-list/costs/costs.component';
import { SharedModule } from './shared-module/shared-module.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BcolorDirective } from './bcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CostsComponent,
    CarDetailsComponent,
    BcolorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
