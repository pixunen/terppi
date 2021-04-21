import { Injectable } from '@angular/core';
import { Health } from '@ionic-native/health/ngx';

@Injectable({
  providedIn: 'root'
})
export class HealthkitService {

  constructor(private health: Health) { }
  steppes:any = [];
  wsteppes:any = [];
  object:any = [];
  wobject:any = [];
  daySteps:any = [];
  odaySteps:any = [];

  

  getSteppes() {

    this.health.requestAuthorization([
      'distance',
      {
        read: ['steps']
      }
    ]);
    
    if(!this.odaySteps.length)
    {
      this.health.queryAggregated({
        startDate: new Date(new Date().getTime() - 0 * 24 * 60 * 60 * 1000), // three days ago
        endDate: new Date(), // now
        dataType: 'steps',
        bucket: 'day'
      }).then(HealthData => this.daySteps.push(HealthData));
  
      for (let key of Object.keys(this.daySteps)) { 
        for (let value of this.daySteps[key]) { 
          this.odaySteps[key] = this.odaySteps[key] || []
          this.odaySteps[key].push(
            value['value']
          );
          }
        }
    }
    
  }

  public async saveData() {
    if(!this.object.length) {
      this.health.queryAggregated({
        startDate: new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), // three days ago
        endDate: new Date(), // now
        dataType: 'steps',
        bucket: 'day'
      }).then(HealthData => this.steppes.push(HealthData));
  
      for (let key of Object.keys(this.steppes)) { 
        for (let value of this.steppes[key]) { 
          this.object[key] = this.object[key] || []
          this.object[key].push(
            value['value']
          );
        } 
      }  
    } 
  }
  public async saveWeek() {
    if(!this.wobject.length) {
      this.health.queryAggregated({
        startDate: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), // three days ago
        endDate: new Date(), // now
        dataType: 'steps',
        bucket: 'day'
      }).then(HealthData => this.wsteppes.push(HealthData));
  
      for (let key of Object.keys(this.wsteppes)) { 
        for (let value of this.wsteppes[key]) { 
          this.wobject[key] = this.wobject[key] || []
          this.wobject[key].push(
            value['value']
          );
        } 
      }  
    } 
  }
}
