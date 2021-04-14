import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { GameComponent } from './pages/game/game.component';
import { StatsComponent } from './pages/stats/stats.component';
import { MaterialsModule } from './materials/materials.module';
import { Pedometer } from '@ionic-native/pedometer/ngx';
import { Health } from '@ionic-native/health/ngx';
import { ChartsModule } from 'ng2-charts';
// Jos lisäätte materiaaleja tehkää se materials moduleen kiitoos :)
// pitää joskus siirtää tästä ne materiaalit kans sinne mut oon liia laiska tekee atm

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    BottomNavComponent,
    GameComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'stats', component: StatsComponent},
      {path: 'game', component: GameComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]),
    
    
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialsModule,
    ChartsModule,
  ],
  providers: [ Pedometer, Health, ChartsModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
