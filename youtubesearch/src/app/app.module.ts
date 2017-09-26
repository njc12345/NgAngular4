import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YoutubesearchService } from './youtubesearch.service';
import { YOUTUBE_API_KEY } from './youtubesearch.service';
import { YOUTUBE_API_URL } from './youtubesearch.service';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    {provide: YoutubesearchService, useClass: YoutubesearchService},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
