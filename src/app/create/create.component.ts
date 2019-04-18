import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  createForm: FormGroup;

  fields = ['registrationNumber', 'registrationDate', 'registeredUpto',
   'manufacturingDate', 'ownerName', 'chassisNumber', 'class', 'model', 'manufacturer', 'RTOId'];

  constructor(private homeService: HomeService, private fb: FormBuilder, private router: Router) {
    const fieldsJson = {};
    this.fields.forEach(e => {
      fieldsJson[e] = '';
    });
    this.createForm = this.fb.group(fieldsJson);
  }

  onSubmit() {
    console.log(this.createForm.value);
    this.homeService.addVehicle(this.createForm.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}