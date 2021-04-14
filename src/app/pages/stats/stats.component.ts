import { Component, OnInit } from '@angular/core';
import { StepcounterService } from '../../services/Stepcounter/stepcounter.service';
import { HealthkitService } from '../../services/Healthkit/healthkit.service';
import { PhotoService } from '../../services/Photo/photo.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, ChartsModule } from 'ng2-charts';



@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  constructor(public StepcounterService: StepcounterService,
    public HealthkitService: HealthkitService, 
    public photoService: PhotoService, 
    public ChartsModule: ChartsModule) { }

    
  async ngOnInit() {
    await this.photoService.loadSaved();
    await this.HealthkitService.saveData();
  }
  
  getSteppes() {
    console.log("Haetaan askeleet..")
    //this.HealthkitService.getSteppes();
    //this.HealthkitService.saveData();
    //console.log(this.HealthkitService.object[0]);
    //this.numeroita();
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
    { data: [1000, 800, 2000], label: 'Testi Askeleet' },
    { data: this.HealthkitService.object, label: 'Askeleet' },
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


