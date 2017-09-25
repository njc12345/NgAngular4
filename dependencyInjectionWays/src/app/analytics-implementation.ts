import { Metric } from './metric';

export interface AnalyticsImplementation {
    recordEvent(metric: Metric): void;
}
