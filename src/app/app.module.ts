import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent} from './components/car/app-car';
import { HttpClientModule } from '@angular/common/http';
import { CreditCalculatorComponent } from './components/credit-calculator/credit-calculator.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CreditCalculatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSliderModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
