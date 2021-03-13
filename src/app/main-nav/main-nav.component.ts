// install with: ng add @angular/material

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)
  constructor(private breakpointObserver: BreakpointObserver) {}

}

//export class MainNavComponent {

  //isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    //.pipe(
      //map(result => result.matches),
      //shareReplay()
   // );

  //constructor(private breakpointObserver: BreakpointObserver) {}

//}