import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //CommonModule
})

export class HomeComponent implements OnInit {

  
  constructor() {

   }

  ngOnInit(): void {
  }

  spinner1 = 80;
  spinner2 = 60;
  spinner3 = 70;
  

  changeSpinnerColor() {

    let spinner = document.getElementById('spinneri1');
    //console.log(spinner);

    let color = document.getElementsByClassName('ng-star-inserted');
    //console.log("color: " + color[1]);
  }

  liikuntaScores: number | string  = `${this.spinner1} / 100`;

  ruokaScores: number | string = `${this.spinner2} / 100`;

  nukkumisScore: number | string = `${this.spinner3} / 100`;


}
