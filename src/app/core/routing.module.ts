import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppTextComponent } from '../modules/text-redactor/components/text-component/text.component';
import { AppMainComponent } from '../app.main-component';


const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    children: [
            { path: 'text-redactor', component: AppTextComponent },
      { path: '', redirectTo: 'text-redactor', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class RouterConfigurationModule { }
