import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import appsettings from '../../../../assets/appsettings.json';

import { AppSettings } from "./appsettings";

 
const SETTINGS_KEY = "configuration";

// const SETTINGS_LOCATION = "assets/appsettings.json";


@Injectable()
export class AppSettingsService {
    constructor(private httpClient: HttpClient) {
        console.log('Reading local json files');
    console.log(appsettings);
    }

    saveSettings(settings: AppSettings) {
        localStorage.setItem("assets/appsettings.json", JSON.stringify(settings));
      }
    

      getSettings(): Observable<AppSettings> {
        let settings = localStorage.getItem(SETTINGS_KEY);
        return this.httpClient.get("assets/appsettings.json").pipe
        (map((response: any) => response || {}));



        // if(settings) {
       //     return of(JSON.parse(settings));
       // }
       // else {
           // return this.http.get(SETTINGS_LOCATION).pipe
           // (map((response => { 
               // let settings = response.json() || {};
               // if(settings) {
                //    this.saveSettings(settings);
               // }
                //return settings;
            //})
            //.catchError(this.handleErrors));
            //)}

    }
    //getSettings(): Observable<AppSettings> {
       // return this.http.get(SETTINGS_LOCATION).pipe
       //(map((response: any) => response.json() || {})).pipe
        //(catchError(this.handleErrors));
       // let settings = localStorage.getItem(SETTINGS_KEY);

    //}

    deleteSettings(): void {
        localStorage.removeItem(SETTINGS_KEY);
      }
    
    private handleErrors(error: any): Observable<AppSettings> {
        // Log the error to the console
    switch (error.status) {
    case 404:
      console.error("Can't find file: " + "assets/appsettings.json");
      break;
    default:
      console.error(error);
      break;
  }
  
  // Return default configuration values
  return of<AppSettings>(new AppSettings());
    }
}
    
    


//export class AppSettingsService {
  //getSettings(): Observable<AppSettings> {
    //let settings = new AppSettings();
    //return of<AppSettings>(settings);
  //}
//}