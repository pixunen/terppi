import { Component, OnInit } from '@angular/core';
import { StepcounterService } from '../../services/Stepcounter/stepcounter.service';
import { HealthkitService } from '../../services/Healthkit/healthkit.service';
import { PhotoService } from '../../services/Photo/photo.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  askeleet:any = "";
  constructor(public StepcounterService: StepcounterService, public HealthkitService: HealthkitService, public photoService: PhotoService) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
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
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
