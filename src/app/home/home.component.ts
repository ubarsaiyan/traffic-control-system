import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  schemas = ['challan', 'emergency', 'crossing', 'licence', 'policeOfficer',
   'policeStation', 'rto', 'street', 'trafficSignal', 'crossingId', 'vehicle'];

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
  }

}
