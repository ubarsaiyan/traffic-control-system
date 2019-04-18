import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  addVehicle(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/vehicle', body).subscribe((data: any) => {
          observer.next({vehicle: data.vehicle});
          console.log('Vehicle added');
          observer.complete();
      });
    });
  }
}
