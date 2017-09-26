import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Searchresult } from '../searchresult';
import { YoutubesearchService } from '../youtubesearch.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<Searchresult[]> = new EventEmitter<Searchresult[]>();

  constructor(private youtube: YoutubesearchService, private el:ElementRef) { }

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e:any)=>e.target.value)  // extract the value of the input box
    .filter((text: string)=> text.length > 4)  // filter out if length less than 4 characters
    .debounceTime(250)   // search only once every 250ms
    .do(()=>this.loading.emit(true))  // enable loading
    .map((query: string)=>this.youtube.search(query))  // do the search
    .switch()  // discard all other search except the latest one
    // act on the return of the search 
    .subscripe((results: Searchresult[])=>{
      this.loading.emit(false);
      this.results.emit(results);
    }, (err: any)=>{
      console.log(err);
      this.loading.emit(false);
    }, ()=>{
      // on completion
      this.loading.emit(false);
    });
  }

}
