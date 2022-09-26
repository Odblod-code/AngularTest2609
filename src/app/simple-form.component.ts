import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Title } from "./title.model";
import { TitleService } from "./title.service";

import { filter, map } from "rxjs/operators";

@Component({
  selector: "simple-form",
  templateUrl: "./simple-form.component.html",
  styleUrls: ["./simple-form.component.css"],
})
export class SimpleFormComponent {

  titleDefault =  "";
  titleList: Title[];
  testForm: FormGroup;

  constructor(private fb: FormBuilder, private titleService: TitleService) {
    this.titleService
      .getTitles()
      .pipe(
        map((title) => title
          .filter((title: Title) => {
            if(title.isDefault) this.titleDefault = title.name;
            return title.name != "!";
          })))
      .subscribe((titles) => {
        this.titleList = titles.sort((a, b) => a.name.localeCompare(b.name));
        this.createForm();
      });
  }

  createForm() {
    this.testForm = this.fb.group({
      title: [this.titleDefault],
      firstName: [""],
      lastName: ["", Validators.required],
      acceptTerms: [""],
    });
  }

  onSubmit() {
    if(this.testForm.valid) console.log(this.testForm.value)
  }

  showControlError(control: AbstractControl) {
    return !control.valid && control.touched;
  }
}
