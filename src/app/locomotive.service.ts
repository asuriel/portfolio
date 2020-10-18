import { Injectable, NgZone } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { interval } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocomotiveService {
  private locomotive: any;

  constructor(private zone: NgZone) {}

  start() {
    // load locomotive twice
    // the first time it will load the locomotive scrolling for the new page
    // the second time it should make sure that it has the full size of the page arranged

    // TODO: once published, review if the double call works
    // if not, try: https://dev.to/herodevs/route-fully-rendered-detection-in-angular-2nh4
    this.startLocomotive();
    setTimeout(() => this.startLocomotive(), 2000);
    setTimeout(() => this.startLocomotive(), 5000);
    setTimeout(() => this.startLocomotive(), 10000);
  }

  private startLocomotive() {
    if(!!this.locomotive) {
      this.locomotive.update();
      return;
    }

    this.locomotive = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  }
}
