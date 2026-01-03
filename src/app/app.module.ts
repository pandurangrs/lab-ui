import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { MainFooterComponent } from './layout/main-footer/main-footer.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainBaneerComponent } from './home/main-baneer/main-baneer.component';
import { SliderOneComponent } from './home/slider-one/slider-one.component';
import { ProductComponentComponent } from './home/product-component/product-component.component';
import { FeatureGridComponent } from './home/feature-grid/feature-grid.component';
import { VideoSectionComponent } from './home/video-section/video-section.component'; 


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainBaneerComponent,
    SliderOneComponent,
    ProductComponentComponent,
    FeatureGridComponent,
    VideoSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
