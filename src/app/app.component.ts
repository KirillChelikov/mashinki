import { Component, OnInit } from '@angular/core';
import { Car} from './interfaces/Car';
import { HttpRequests} from './http-requests/http-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mashinki';
  cars: Car[];
  currentCar: Car = null;
  constructor(private http: HttpRequests) {
  }
  async ngOnInit(): Promise<void> {
    this.cars = await this.http.getCarData();
  }

}
