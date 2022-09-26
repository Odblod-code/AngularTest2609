import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Title } from "./title.model";
import { TitleService } from "./title.service";

import { filter, map } from 'rxjs/operators';

@Component({
  selector: "simple-form",
  templateUrl: "./simple-form.component.html",
  styleUrls: ["./simple-form.component.css"],
})
export class SimpleFormComponent {

  titleList: Title[];
  testForm: FormGroup;

  constructor(private fb: FormBuilder,
    private titleService: TitleService) {
    this.titleService.getTitles().pipe(
        map((title) => title.filter((title: Title) => title.name != '!'))
      ).subscribe(titles => {
      this.titleList = titles;
    });
    this.createForm();
  }
   createForm() {
    this.testForm = this.fb.group({
       name: ['', Validators.required ]
    });
  }
}
