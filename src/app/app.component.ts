import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  public openNav(){
    document.getElementById("mySidenav").style.width = "100vw";
  }
  public closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }
}
