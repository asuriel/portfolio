import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeaborgComponent } from './seaborg/seaborg.component';
import { ForecastComponent } from './forecast/forecast.component';
import { PicloComponent } from './piclo/piclo.component';
import { AmnestyComponent } from './amnesty/amnesty.component';
import { WorkComponent } from './work/work.component';
import { RouterModule } from '@angular/router';
import { ShapeshiftComponent } from './shapeshift/shapeshift.component';



@NgModule({
  declarations: [
    SeaborgComponent,
    ForecastComponent,
    PicloComponent,
    AmnestyComponent,
    WorkComponent,
    ShapeshiftComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CaseStudiesModule { }
