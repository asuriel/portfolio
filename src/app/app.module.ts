import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseStudiesModule } from './case-studies/case-studies.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CaseStudiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
