import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //CommonModule
})

export class HomeComponent implements OnInit {

  
  constructor() {

   }

  ngOnInit(): void {
  }

  spinner1 = 58;
  spinner2 = 78;
  spinner3 = 43;

}
