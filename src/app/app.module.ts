import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextRedactorModule } from './modules/text-redactor/text-redactor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TextRedactorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
