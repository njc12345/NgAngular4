import { Injectable } from '@angular/core';
import { Metric } from './metric';
import { AnalyticsImplementation } from './analytics-implementation';

@Injectable()
export class AnalyticsService {

  constructor(private implementation: AnalyticsImplementation) { }

  record(metric: Metric):void{
    this.implementation.recordEvent(metric);
  }

}
