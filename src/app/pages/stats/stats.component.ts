import { Component, OnInit } from '@angular/core';
import { StepcounterService } from '../../services/Stepcounter/stepcounter.service';
import { HealthkitService } from '../../services/Healthkit/healthkit.service';
import { PhotoService } from '../../services/Photo/photo.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';



@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  askeleet:any = "";
  constructor(public StepcounterService: StepcounterService,
    public HealthkitService: HealthkitService, 
    public photoService: PhotoService, 
    public ChartsModule: ChartsModule) { }

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


  lineChartData: ChartDataSets[] = [
    { data: [80, 70, 20], label: 'Testi Askeleet' },
    { data: [100, 50, 10], label: 'Syke' },
    { data: [this.askeleet], label: 'Askeleet' },
  ];

  lineChartLabels: Label[] = ['Toissapäivänä', 'Eillen', 'Tänään'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(54,54,54)',
      backgroundColor: 'rgba(0,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}
