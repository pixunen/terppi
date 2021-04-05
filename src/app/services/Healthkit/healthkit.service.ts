import { Injectable } from '@angular/core';
import { Health } from '@ionic-native/health/ngx';

@Injectable({
  providedIn: 'root'
})
export class HealthkitService {

  constructor(private health: Health) { }
  steppes:any = [];
  object:any = {};

  getSteppes() {
    this.health.requestAuthorization([
      'distance',
      {
        read: ['steps']
      }
    ]);
  }
  saveData() {
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
            )
        } 
    } 
  }
}
