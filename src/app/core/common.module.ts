import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppTemplateComponent } from './components/template/template.component';

import {
  MatCheckboxModule,
  MatListModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatProgressBarModule,
  MatMenuModule,
  MatRippleModule,
  MatTooltipModule,
  MatExpansionModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatBadgeModule,
  MatDialogModule,
  MatButtonToggleModule,
 } from '@angular/material';
 import { MatButtonModule } from '@angular/material/button';
 import { MatIconModule } from '@angular/material/icon'
import { WrapperPipe } from './pipes/wrapper.pipe';
import { RouterConfigurationModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  declarations: [
    AppTemplateComponent,
    WrapperPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterConfigurationModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTabsModule,
    MatMenuModule,
    MatRippleModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    MatButtonToggleModule,
    ColorPickerModule,

  ],
  exports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterConfigurationModule,
    AppTemplateComponent,
    WrapperPipe,

    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTabsModule,
    MatMenuModule,
    MatRippleModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    MatButtonToggleModule,
    ColorPickerModule,
  ],
})
export class CommonModule { }
