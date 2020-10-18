import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators'

import { LocomotiveService } from './locomotive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private router: Router, private locomotive: LocomotiveService) {

    // Listen to the router event
    // Every time navigation completes
    // Reload Locomotive
    this.router.events
    .pipe(
      filter( event =>event instanceof NavigationEnd)
    )
    .subscribe(
      () => {
        this.locomotive.start();
      }
    )
  }

  public openNav(){
    document.getElementById("mySidenav").style.width = "100vw";
  }
  public closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }
}
