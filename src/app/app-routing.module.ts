import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeaborgComponent } from './case-studies/seaborg/seaborg.component';
import { ForecastComponent } from './case-studies/forecast/forecast.component';
import { PicloComponent } from './case-studies/piclo/piclo.component';
import { AmnestyComponent } from './case-studies/amnesty/amnesty.component';
import { ShapeshiftComponent } from './case-studies/shapeshift/shapeshift.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './case-studies/work/work.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'work', children: [
    { path: '', component: WorkComponent },
    { path: 'seaborg', component: SeaborgComponent },
    { path: 'forecast', component: ForecastComponent },
    { path: 'piclo', component: PicloComponent },
    { path: 'amnestyinternational', component: AmnestyComponent },
    { path: 'shapeshift', component: ShapeshiftComponent },
  ]},
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
