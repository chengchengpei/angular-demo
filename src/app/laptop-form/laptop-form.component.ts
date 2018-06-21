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

  oses = ['MAC', 'windows'];

  qualities = ['OK', 'good', 'very good', 'perfect', 'excellent'];

  model = new Laptop(42, this.oses[0], this.qualities[1], 0, 3000);

  submitted = false;

  sugg = "";

  onSubmit() {
    this.submitted = true;
    const req = this.http.post('http://127.0.0.1:8080/api/', this.model)
      .subscribe(
        res => {
          this.sugg = res;
          console.log("heheheheheh");
          console.log(res, typeof(res));
        },
        err => {
          console.log("Error occured:", err);
        }
      );
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newLaptop() {
    this.model = new Laptop(42, this.oses[0], this.qualities[1], 0, 3000);
  }

  myLaptop(): Laptop {
    let laptop =  new Laptop(42, this.oses[0], this.qualities[1], 0, 3000);
    console.log('My laptop is called ' + JSON.stringify(laptop));
    return laptop;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(laptopForm)}}
  showFormControls(form: any) {
    return form && form.controls['os'] &&
    form.controls['quality'].value;
  }

  /////////////////////////////

}
