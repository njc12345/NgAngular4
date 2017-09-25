import { Component, ReflectiveInjector, Inject } from '@angular/core';
import { UserServiceManualInjectionService } from './user-service-manual-injection.service';
import { UserServiceService } from './user-service.service';
import { AnalyticsService } from './analytics.service';
import { Metric } from './metric';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  userName: string;
  userName1: string;
  userServiceManual: UserServiceManualInjectionService;
  myUrl: string;

  constructor(private userService: UserServiceService, @Inject('MY_URL') myUrl: string, private analyticsService: AnalyticsService){
    const injector: any = ReflectiveInjector.resolveAndCreate([UserServiceManualInjectionService]);
    this.userServiceManual = injector.get(UserServiceManualInjectionService);
    this.myUrl = myUrl;

    this.analyticsService.record({
      eventName: 'componentCreated',
      scope: 'AnalyticsDemo'
    });
  }

  signIn(): void{

    this.userServiceManual.setUser({
      name: 'Aarya Chauhan'
    });

    this.userService.setUser({
      name: 'Aarya Chauhan'
    });

    this.userName = this.userServiceManual.getUser().name;
    this.userName1 = this.userService.getUser().name;
    console.log('User name from manual service is: ', this.userName);
    console.log('User name from ngmodule service is: ', this.userName1);
    console.log('URL injected is: ', this.myUrl);

    this.analyticsService.record({
      eventName: 'SignInButtonPressed',
      scope: this.userName
    });
  }

}
