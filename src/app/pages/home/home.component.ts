import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor() {

   }

  ngOnInit(): void {
  }

  spinner1 = 80;
  spinner3 = 70;
  spinner2 = 60;

  liikuntaScores: number | string  = `${this.spinner1} / 100`;


}
