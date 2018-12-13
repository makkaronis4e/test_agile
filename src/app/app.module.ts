import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextRedactorModule } from './modules/text-redactor/text-redactor.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from './core/common.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    TextRedactorModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
