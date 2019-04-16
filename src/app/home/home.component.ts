import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private router: Router) { }

  number: string;
  type: string;

  ngOnInit() {
  }

  addVehicle() {
    console.log('adding vehicle');
    this.homeService.addVehicle(this.number, this.type)
    .subscribe(data => {
      console.log('done');
      this.router.navigate(['']);
    });
  }

}
