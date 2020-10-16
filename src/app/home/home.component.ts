import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const circle = document.querySelectorAll('#sunset #sun');

    const rectangle = document.querySelectorAll('#sunset #sea');

    const moon = document.querySelectorAll('#sunset #moon');

    const timeline = anime.timeline ({
      duration: 6500,
      direction: 'alternate',
      loop:true,
    });


    timeline.add({
      targets: circle,
      translateY: -160,
      duration: 3000,
      easing: 'easeInOutExpo',
      fill: '#fa5274'
    });
    timeline.add({
      targets: rectangle,
      easing: 'easeInExpo',
      translateY: -150,
      duration: 1500,
      fill: '#1c3fc9'
    });
    // timeline.add({
    //   targets: '#moon path',
    //   easing: 'easeInExpo',
    //   // translateY: -150,
    //   duration: 2000,
    //   fill: 'red'
    // });

    timeline.add({
      targets: moon,
      translateX: 50,
      translateY: 10,
      // rotate: path('angle'),
      duration: 2000,
    });
    

  }

}
