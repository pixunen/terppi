import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //CommonModule
})

export class HomeComponent implements OnInit {

  // get the needet data so we can calc the precentages.
  constructor() {
 
   }

  ngOnInit(): void {
    this.animateSpinners(this.precentages, this.radiusses);
  }

  // precentages and radiusses of the spinners
  spinner1 = 100;
  radius1 = 90;

  spinner2 = 60;
  radius2 = 69;

  spinner3 = 40;
  radius3 = 52;
    //console.log(spinner);

  precentages = [this.spinner1, this.spinner2, this.spinner3];
  radiusses = [this.radius1, this.radius2, this.radius3];
  

  liikuntaScores: number | string  = `${this.spinner1} / 100`;

  ruokaScores: number | string = `${this.spinner2} / 100`;

  nukkumisScore: number | string = `${this.spinner3} / 100`;

  // function to animate the svg spinners
  animateSpinners(precentages: number[], radiusses: number[]) {
    let radius = 0;
    let circumference = 0;
    let strokeDashOffset = 0;
    // call animateProgress on each spinner and give the values needed
    // circumference is the length of the circle
    // strokeDashOffset is the current offset calculated based on the precentage <-- which is calculated based on set goals and...
    for (let i = 0; i < precentages.length; i++) {
        
        let spinner = (<HTMLElement>document.getElementById("circle-complete-"+(i+1)));
        radius = radiusses[i];
        circumference = 2 * Math.PI * radius;
        strokeDashOffset = circumference - ((precentages[i] * circumference) / 100);
        //spinner.style.strokeDashoffset = "0";
        this.animateProgress(spinner, circumference, strokeDashOffset);
    }
  }
  // Call this function until pathL == maxPath
  animateProgress(element: HTMLElement, pathL: number, maxPath: number) {

    pathL -= 2;

    element.style.strokeDashoffset = pathL.toString();

    if (pathL > maxPath){
        setTimeout(() => { this.animateProgress(element, pathL, maxPath);}, 10);
    } else {
        return;
    }
  }
}
