import { Component, OnDestroy, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

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
      translateY: -180,
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
      translateX: 30,
      translateY: 10,
      // rotate: path('angle'),
      duration: 2000,
    });
    
    // this.textAnimation('Designs digital interfaces');
    this.loopSentences()
  }

  ngOnDestroy(): void {
    clearInterval(this.loopId);
  }


  private loopSentences() {
    this.textAnimation();

    this.loopId = setInterval(() => {
      this.textAnimation();
    },3000)
  }
  
  private loopId: any = 0;
  private sentences: string[] = [
    'Designs digital interfaces',
    'Facilitates awesome workshops',
    'Always builds prototypes first',
    'Is an advocate for the user',
    'Coded her own UX portfolio',
    'had a secret past life as a developer',
    'likes to draw beautiful illustrations',
    'is a name that means morning in Latin',
    '...Is a night owl.',
  ];
  
  private sentenceIndex: number = -1;

  private getNextSentence(){
      this.sentenceIndex++;
      if (this.sentenceIndex === this.sentences.length) {
        this.sentenceIndex = 0;
      }
      return this.sentences[this.sentenceIndex];
  }

  private textAnimation() {
    let text = this.getNextSentence();

    let sentence = text.replace(/\S/g, "<span class='letter'>$&</span>");

    document.getElementById("s1").innerHTML = sentence;

    anime.timeline({loop: false})
      .add({
      targets: '#s1 .letter',
      translateY: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 300 + 30 * i
    }).add({
      targets: '#s1 .letter',
      translateY: [0,-100],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i
    });

  }

}
