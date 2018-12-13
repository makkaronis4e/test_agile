import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppTemplateComponent } from './components/template/template.component';


@NgModule({
  declarations: [
    AppTemplateComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  exports: [
    HttpClientModule,
    BrowserModule,
    AppTemplateComponent,
  ],
})
export class CommonModule { }
