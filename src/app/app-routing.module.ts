import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeaborgComponent } from './case-studies/seaborg/seaborg.component';
import { ForecastComponent } from './case-studies/forecast/forecast.component';
import { PicloComponent } from './case-studies/piclo/piclo.component';
import { AmnestyComponent } from './case-studies/amnesty/amnesty.component';


const routes: Routes = [
  { path: '',   redirectTo: 'ux/seaborg', pathMatch: 'full' },
  { path: 'ux/seaborg', component: SeaborgComponent },
  { path: 'ux/forecast', component: ForecastComponent },
  { path: 'ux/piclo', component: PicloComponent },
  { path: 'ux/amnestyinternational', component: AmnestyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
