import { Injectable } from '@angular/core';
import { Pedometer } from '@ionic-native/pedometer/ngx';
import { IPedometerData } from '@ionic-native/pedometer';
import { NgZone } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StepcounterService {
steps: any = [];
constructor(private pedometer: Pedometer, private ngZone: NgZone) {
  this.readSteps();
        setInterval(()=>{
           console.log('read in a sec')
        },1000)
 }


readSteps() {
  this.pedometer.startPedometerUpdates()
   .subscribe((data: IPedometerData) => {
    this.ngZone.run(() =>  this.steps.push(data))
    });
}
stopSteps() {
  this.pedometer.stopPedometerUpdates();
}

}
