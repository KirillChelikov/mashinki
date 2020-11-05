import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Car} from '../interfaces/Car';

@Injectable({
  providedIn: 'root'
})
export class HttpRequests {
  constructor(private readonly http: HttpClient) {
  }

  public getCarData(): Promise<Car[]> {
    return new Promise<Car[]>(resolve => {
      // tslint:disable-next-line:max-line-length
        resolve([{image: 'https://img1.liveinternet.ru/images/attach/c/8/101/17/101017651_Wind_Up_samuyy_malenkiy_avtomobil_v_mire_3.jpg', brand: 'BMW', model: 'X6', price: 10000},
          {image: 'https://klike.net/uploads/posts/2018-12/1543907183_29.jpg', brand: 'BMW', model: 'X6', price: 2000},
          {image: 'https://img1.liveinternet.ru/images/attach/c/8/101/17/101017651_Wind_Up_samuyy_malenkiy_avtomobil_v_mire_3.jpg', brand: 'BMW', model: 'X6', price: 10000},
          {image: 'https://klike.net/uploads/posts/2018-12/1543907183_29.jpg', brand: 'BMW', model: 'X6', price: 80000}, ]);
      }
    );
  }
}
