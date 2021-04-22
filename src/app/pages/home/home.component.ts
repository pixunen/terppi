import { Component, OnInit } from '@angular/core';
import { StepcounterService } from '../../services/Stepcounter/stepcounter.service';
import { HealthkitService } from '../../services/Healthkit/healthkit.service';
import { PhotoService } from '../../services/Photo/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  // precentages and radiusses of the spinners - the radius is the raadius of the progress circle
  // nukkuminen
  sleepRadi = 90;
  daySleepHoursGoal: any;
  daySleepHours: any;
  daySleepPre: any;

  // syöminen  
  eatRadi = 69;
  dayEatGoal: any; // we need to get this from somewhere where it is stored
  dayEaten: any;
  eatPre: any;

  // liikunta
  stepsRadi = 52;
  dayStepGoal: any; // we need to get this from somewhere where it is stored
  daySteps: any = []; // get 
  stepPre: any;

  // Text areas
  liikuntaScores: number | string;
  ruokaScores: number | string;
  nukkumisScore: number | string;
  
  // we just initialize the text areas in constructor because we have to or angular is mad..
  // this might be improved by changing the way how the text areas data is send to the html but it is open problem atm
  constructor(public StepcounterService: StepcounterService, public HealthkitService: HealthkitService, public photoService: PhotoService,) {
    this.liikuntaScores = `${this.daySteps} / ${this.dayStepGoal} `;
    this.ruokaScores = `${this.dayEaten} / ${this.dayEatGoal}`;
    this.nukkumisScore = `${this.daySleepHours} / ${this.daySleepHoursGoal}`;
  
   }

   // solve how to ask auth only once on android device
   // this can be removed, but remove the event from the .html as well
   test(){
    this.HealthkitService.getAuth()
   }

  ngOnInit(): void {
    // this value needs to be gotten from the right place
    this.dayStepGoal = 1000;
    this.dayEatGoal = 500;
    this.daySleepHoursGoal = 8;

    this.HealthkitService.getSteppes();
    this.daySteps = Math.floor(this.HealthkitService.odaySteps);
    //console.log(this.daySteps);
    //console.log(this.HealthkitService.daySteps[0]);
    // just hardcoding the value until the service workspace
    //this.daySteps = 400;
    this.dayEaten = 280;
    this.daySleepHours = 7;

    if(this.dayStepGoal === 0 || this.dayEatGoal === 0 || this.dayStepGoal === 0){ // error handling we should not end here
    }
    this.stepPre = ((this.daySteps/this.dayStepGoal)*100);
    this.eatPre = ((this.dayEaten/this.dayEatGoal)*100);
    this.daySleepPre = ((this.daySleepHours/this.daySleepHoursGoal)*100);

    //display the textContent
    this.liikuntaScores = `${this.daySteps} / ${this.dayStepGoal} `;
    this.ruokaScores = `${this.dayEaten} / ${this.dayEatGoal}`;
    this.nukkumisScore = `${this.daySleepHours} / ${this.daySleepHoursGoal}`;

    // animateSpinners animates the progress bar with this given data
    let precentages = [this.daySleepPre, this.eatPre, this.stepPre];
    let radiusses = [this.sleepRadi, this.eatRadi, this.stepsRadi];
    this.animateSpinners(precentages, radiusses);
  }

  // function to animate the svg spinners 
  // improvement idea: maybe do the calculations outside of angular (ngZone.runOutsideAngular)?
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

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
