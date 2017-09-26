import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Searchresult } from './searchresult';
import { Observable } from 'rxjs/Observable';

export const YOUTUBE_API_KEY: string = 'AIzaSyDgjRK29RqMWhPi8jVcN-S5aK3bl0Ek7AY';
export const YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YoutubesearchService {
  constructor(private http: Http, @Inject(YOUTUBE_API_KEY) private apiKey: string, @Inject(YOUTUBE_API_URL) private apiUrl: string) { 
  }

  search(query: string): Observable<Searchresult[]>{
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.apiUrl}?${params}`;
    console.log('Query URL is: ', queryUrl);

    return this.http.get(queryUrl).map((response: Response)=>{
      return (<any>response.json()).items.map(item=>{
        console.log('Raw item is: ', item);
        return new Searchresult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumnailUrl: item.snippet.thumnails.high.url
        });
      });
    });
  }
}
