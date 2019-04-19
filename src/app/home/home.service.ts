import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  addChallan(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/challan', body).subscribe((data: any) => {
          console.log('Challan added');
          observer.complete();
      });
    });
  }

  addEmergency(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/emergency', body).subscribe((data: any) => {
          console.log('Emergency added');
          observer.complete();
      });
    });
  }

  addCrossing(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/crossing', body).subscribe((data: any) => {
          console.log('Crossing added');
          observer.complete();
      });
    });
  }

  addLicence(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/licence', body).subscribe((data: any) => {
          console.log('Licence added');
          observer.complete();
      });
    });
  }

  addPoliceOfficer(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/policeOfficer', body).subscribe((data: any) => {
          console.log('policeOfficer added');
          observer.complete();
      });
    });
  }

  addPoliceStation(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/policeStation', body).subscribe((data: any) => {
          console.log('policeStation added');
          observer.complete();
      });
    });
  }

  addRto(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/rto', body).subscribe((data: any) => {
          console.log('rto added');
          observer.complete();
      });
    });
  }

  addStreet(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/street', body).subscribe((data: any) => {
          console.log('street added');
          observer.complete();
      });
    });
  }

  addTrafficSignal(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/trafficSignal', body).subscribe((data: any) => {
          console.log('trafficSignal added');
          observer.complete();
      });
    });
  }

  addCrossingId(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/crossingId', body).subscribe((data: any) => {
          console.log('crossingId added');
          observer.complete();
      });
    });
  }

  addVehicle(body: any): Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/vehicle', body).subscribe((data: any) => {
          console.log('Vehicle added');
          observer.complete();
      });
    });
  }
}
