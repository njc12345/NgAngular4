import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { UserServiceService } from './user-service.service';
import { AnalyticsService } from './analytics.service';
import { AnalyticsImplementation } from './analytics-implementation';
import { Metric } from './metric';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [
    UserServiceService,
    {provide: 'MY_URL', useValue: 'http://stackoverflow.com'},
    {
      provide: AnalyticsService, 
      
      // add our `deps` to specify the factory depencies
      deps: [ Http, 'MY_URL' ],

      // notice we've added arguments here
      // the order matches the deps order
      useFactory(http: Http, myUrl: string){
      const loggingImplementation: AnalyticsImplementation = {
        recordEvent: (metric: Metric): void => {
          console.log('The metric is: ', metric);
          console.log('Sending metric to: ', myUrl);
        }
      };

      return new AnalyticsService(loggingImplementation);
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
