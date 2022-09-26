import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form.component';
import { TitleService } from './title.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, CommonModule ],
  declarations: [ AppComponent, SimpleFormComponent ],
  providers: [ TitleService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
