import { Component, OnInit } from '@angular/core';
import { StepcounterService } from '../../services/Stepcounter/stepcounter.service';
import { HealthkitService } from '../../services/Healthkit/healthkit.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  askeleet:any = "";
  constructor(public StepcounterService: StepcounterService, public HealthkitService: HealthkitService) { }

  ngOnInit(): void {
  }
  
  getSteppes() {
    console.log("Haetaan askeleet..")
    this.HealthkitService.getSteppes();
    this.HealthkitService.saveData();
  }
  countSteps() {
    console.log("Counting Starts..");
    this.StepcounterService.readSteps();
  }
  stop() {
    console.log("Counting Ends");
    this.StepcounterService.stopSteps();
  }

}
