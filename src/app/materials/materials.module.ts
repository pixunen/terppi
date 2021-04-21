import { MatProgressSpinnerModule } from "@angular/material/progress-spinner/";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [], 
  exports: [
    MatProgressSpinnerModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialsModule { }
