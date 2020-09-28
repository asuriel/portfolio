import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeaborgComponent } from './seaborg/seaborg.component';
import { ForecastComponent } from './forecast/forecast.component';
import { PicloComponent } from './piclo/piclo.component';
import { AmnestyComponent } from './amnesty/amnesty.component';



@NgModule({
  declarations: [SeaborgComponent, ForecastComponent, PicloComponent, AmnestyComponent],
  imports: [
    CommonModule
  ]
})
export class CaseStudiesModule { }
