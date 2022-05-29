import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderWidgetComponent } from './headerWidget/headerWidget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { WeatherWidgetService } from './services/weather-widget.service';
import { TemperatureConverterPipe } from './pipes/temperature-converter.pipe';
import { WidgetPageComponent } from './widget-page/widget-page.component';
import { WindConverterPipe } from './pipes/wind-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderWidgetComponent,
    WeatherWidgetComponent,
    TemperatureConverterPipe,
    WidgetPageComponent,
    WindConverterPipe
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        MatCardModule,
        MatSnackBarModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        NgxPaginationModule
    ],
  providers: [WeatherWidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
