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
    await this.HealthkitService.saveWeek();
    await this.addData();
    this.lineChartData2[0].data = this.bigdata;
    this.lineChartData3[0].data = this.weekdata;
  }
  bigdata: number[] = [];
  weekdata: number[] = [];
  
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
  public async addData() {
    this.bigdata = [].concat.apply([], this.HealthkitService.object);
    this.weekdata = [].concat.apply([], this.HealthkitService.wobject);

    //console.log(this.bigdata);
  }
  

  
  lineChartData: ChartDataSets[] = [
    { data: [1000, 800, 2000], label: 'Testi Askeleet' },
    { data: [400, 500, 1200], label: 'Testi Uni' },
    { data: [200, 1500, 200], label: 'Testi Ruoka' },
  ];
  lineChartData2: ChartDataSets[] = [
    { data: [], label: 'Askeleet' }
  ];
  lineChartData3: ChartDataSets[] = [
    { data: [], label: 'Tavoitteet' }
  ];

  lineChartLabels: Label[] = ['Toissapäivänä', 'Eillen', 'Tänään'];
  lineChartLabels3: Label[] = ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(255, 255, 255)',
      backgroundColor: 'rgba(0,255,0,0.28)'
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  lineChartType3 = 'bar';

}


