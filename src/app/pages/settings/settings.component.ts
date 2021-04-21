import { Component, OnInit } from "@angular/core";
import { Product } from '../settings/product';
import { AppSettings } from '../settings/shared/appsettings';
import { AppSettingsService } from '../settings/shared/appsettings.service';

@Component({
    selector: "product-detail", templateUrl: "./settings.component.html", styleUrls: ['./settings.component.scss']
  })

  export class SettingsComponent implements OnInit {
      
    

    constructor(private appSettingsService: AppSettingsService) {
        
    }

    product!: Product;
    settings!: AppSettings;

    ngOnInit(): void {
        this.appSettingsService.getSettings().subscribe(settings => this.settings = settings, () => null, () => {
          this.product = new Product();
          this.product.userName = this.settings.defaultName;
          this.product.age = this.settings.defaultAge;
          this.product.email = this.settings.defaultEmail;
        });
      }

    saveSettings(): void {
        this.settings.defaultName = this.product.userName;
        this.settings.defaultAge = this.product.age;
        this.settings.defaultEmail = this.product.email;
        this.appSettingsService.saveSettings(this.settings);
    }
    
    saveProduct(): void {
    }

    deleteSettings(): void {
        this.appSettingsService.deleteSettings();
      }
  }
  