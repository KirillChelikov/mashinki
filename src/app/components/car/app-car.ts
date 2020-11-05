import { Component, Input } from '@angular/core';
import { Car } from '../../interfaces/Car';
import { HttpRequests} from '../../http-requests/http-request';

@Component({
  selector: 'app-car',
  templateUrl: './app-car.html',
  styleUrls: ['./app-car.css']
})
export class CarComponent {
  @Input() car: Car;
}
