import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map/google-map.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARIZgEvVm-isf97lDF5HmAwom6N7ftFg8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
