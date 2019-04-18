import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vehicle } from '../models/vehicle.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private router: Router) { }

  vehicles: Vehicle[];
  displayedColumns = ['registrationNumber', 'registrationDate', 'registeredUpto',
   'manufacturingDate', 'ownerName', 'chassisNumber', 'class', 'model', 'manufacturer', 'RTOId'];

  ngOnInit() {
  }

  // addVehicle() {
  //   console.log('adding vehicle');
  //   this.homeService.addVehicle(this.number, this.type)
  //   .subscribe(data => {
  //     console.log('done');
  //     this.router.navigate(['']);
  //   });
  // }

}
