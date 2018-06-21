import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Laptop }    from '../laptop';

@Component({
  selector: 'app-laptop-form',
  templateUrl: './laptop-form.component.html',
  styleUrls: ['./laptop-form.component.css']
})


export class LaptopFormComponent {

  constructor(private http: HttpClient) {}

  oses = ['MAC', 'Windows'];

  qualities = ['OK', 'Good', 'Very good', 'Excellent', 'Perfect'];

  model = new Laptop(42, this.oses[0], this.qualities[1], 0, 3000);

  submitted = false;

  sugg = "";


  // TODO: create service
  onSubmit() {
    this.submitted = true;
    const req = this.http.post('http://127.0.0.1:8080/api/', this.model)
      .subscribe(
        res => {
          this.sugg = res.os;
          console.log("heheheheheh");
          console.log(res, typeof(res));
        },
        err => {
          console.log("Error:", err);
          this.sugg = "Error";
        }
      );
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  reset() {
    this.model = new Laptop(42, this.oses[0], this.qualities[1], 0, 3000);
    this.sugg = "";
    this.submitted = false;
  }

  // TODO: Clean
  /*
  myLaptop(): Laptop {
    let laptop =  new Laptop(42, this.oses[0], this.qualities[1], 0, 3000);
    console.log('My laptop is called ' + JSON.stringify(laptop));
    return laptop;
  }*/

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(laptopForm)}}
  showFormControls(form: any) {
    return form && form.controls['os'] &&
    form.controls['quality'].value;
  }

  /////////////////////////////

}
