import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  createForm: FormGroup;
  fields: string[];
  schema: string;

  challanFields = ['challanId', 'officerId', 'licenceId', 'fineAmount', 'registrationNumber', 'offences'];
  emergencyFields = ['streetId', 'officerId', 'typeOfEmergency'];
  crossingFields = ['crossingId', 'crossingName', 'typesOfCrossing','connectingStreetId','officerId'];
  licenceFields = ['licenceId', 'name', 'authorization', 'dateOfBirth', 'dateOfIssue', 'expirationDate', 'address', 'bloodGroup'];
  policeOfficerFields = ['officerId', 'age', 'name', 'rank', 'bloodGroup', 'stationId'];
  policeStationFields = ['policeStationId', 'address', 'policeStationName'];
  rtoFields = ['rtoCode', 'address', 'head'];
  streetFields = ['streetId', 'streetName', 'numberOfLanes', 'typeOfRoad'];
  trafficSignalFields = ['trafficLightId', 'crossingId'];
  vehicleFields = ['registrationNumber', 'registrationDate', 'registeredUpto',
   'manufacturingDate', 'ownerName', 'chassisNumber', 'class', 'model', 'manufacturer', 'RTOId'];

  constructor(private route: ActivatedRoute, private homeService: HomeService, private fb: FormBuilder, private router: Router) {
    this.schema = this.route.snapshot.paramMap.get('schema');
    // console.log(schema);
    this.fields = this[this.schema + 'Fields'];
    // console.log(this.fields);
    const fieldsJson = {};
    this.fields.forEach(e => {
      fieldsJson[e] = '';
    });
    // console.log(fieldsJson);
    this.createForm = this.fb.group(fieldsJson);
  }

  onSubmit() {
    console.log(this.createForm.value);
    this.homeService['add' + this.schema.charAt(0).toUpperCase() + this.schema.slice(1)](this.createForm.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}