import { Injectable } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';

@Injectable({
  providedIn: 'root'
})
export class LocomotiveService {
  private locomotive: any;

  constructor() {}

  start() {
    // load locomotive multiple times
    // the first time it will load the locomotive scrolling for the new page
    // the remaining times it should make sure that it has the full size of the page arranged
    
    // TODO: update, so that the refresh happens only when Angular finishes rendering the page
    // if not, try: https://dev.to/herodevs/route-fully-rendered-detection-in-angular-2nh4
    this.startLocomotive();
    setTimeout(() => this.refreshLocomotive(), 2000);
    setTimeout(() => this.refreshLocomotive(), 5000);
    setTimeout(() => this.refreshLocomotive(), 10000);
  }

  private startLocomotive() {
    // if locomotive exists, then destroy it
    // so that the scroll is set to the beginning
    if(!!this.locomotive) {
      this.locomotive.destroy();
    }

    this.locomotive = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  }

  private refreshLocomotive() {
    // recalculate the size of the page
    this.locomotive.update();
  }
}
