import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Laptop } from '../laptop';

@Component({
  selector: 'app-laptop-form',
  templateUrl: './laptop-form.component.html',
  styleUrls: ['./laptop-form.component.css']
})


export class LaptopFormComponent {

  constructor(private http: HttpClient) {}

  oses = ['MAC', 'Windows', 'Linux'];

  qualities = ['OK', 'Good', 'Very good', 'Excellent', 'Perfect'];

  map = new Map<String, String>()
    .set("OK","1")
    .set("Good","2")
    .set("Very good","3")
    .set("Excellent","4")
    .set("Perfect","5");

  model = new Laptop(this.oses[0], this.qualities[1], 0, 3000);

  displayedColumns = ['title', 'description', 'url', 'price'];

  submitted = false;

  errMsg = "";

  showTable = false;

  sugg = "";

  laptopArray = [];


  // TODO: create service
  // TODO: Change API endpoint
  onSubmit() {

    this.submitted = true;
    let data = { ...this.model };

    // console.log("1 Map:" + JSON.stringify(this.map));

    data.quality = this.map.get(data.quality);

    // console.log("2 Map:" + this.map);

    console.log("Data:" + JSON.stringify(data));

    const req = this.http.post('https://mapleleafs-207919.appspot.com/_ah/api/echo/v1/search', data)
      .subscribe(
        res => {
          console.log("response:" + JSON.stringify(res));
          this.laptopArray = res as any;
          this.showTable = true;
          this.errMsg = "";
        },
        err => {
          console.log("Error:", err);
          this.errMsg = "Error:" + JSON.stringify(err);
          this.showTable = false;
        }
      );
  }


  fakeData() {
    this.submitted = true;
    const req = this.http.post('http://127.0.0.1:8080/api/', this.model)
      .subscribe(
        res => {
          this.laptopArray = res as any;
          this.showTable = true;
          this.errMsg = "";
        },
        err => {
          console.log("Error:", err);
          this.errMsg = "Error";
          this.showTable = false;
        }
      );
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  reset() {
    this.model = new Laptop(this.oses[0], this.qualities[1], 0, 3000);
    this.errMsg = "";
    this.showTable = false;
    this.laptopArray = [];
    this.submitted = false;
  }

  // TODO: Clean
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(laptopForm)}}
  showFormControls(form: any) {
    return form && form.controls['os'] &&
    form.controls['quality'].value;
  }
}
