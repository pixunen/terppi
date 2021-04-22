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
import { SettingsComponent } from './pages/settings/settings.component';
import { StatsComponent } from './pages/stats/stats.component';
import { MaterialsModule } from './materials/materials.module';
import { Pedometer } from '@ionic-native/pedometer/ngx';
import { Health } from '@ionic-native/health/ngx';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { TipsComponent } from './pages/tips/tips.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { AppSettingsService } from "./pages/settings/shared/appsettings.service";
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// Jos lisäätte materiaaleja tehkää se materials moduleen kiitoos :)
// pitää joskus siirtää tästä ne materiaalit kans sinne mut oon liia laiska tekee atm

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    BottomNavComponent,
    GameComponent,
    StatsComponent,
    SettingsComponent,
    HobbiesComponent,
    GoalsComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'stats', component: StatsComponent},
      {path: 'game', component: GameComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'tips', component: TipsComponent},
      {path: 'goals', component: GoalsComponent},
      {path: 'hobbies', component: HobbiesComponent},
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
    ReactiveFormsModule,
    ChartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [ Pedometer, Health, ChartsModule, AppSettingsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
