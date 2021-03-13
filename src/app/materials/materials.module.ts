import { MatProgressSpinnerModule } from "@angular/material/progress-spinner/";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [],
  imports: [], 
  exports: [
    MatProgressSpinnerModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDividerModule
  ]
})
export class MaterialsModule { }
