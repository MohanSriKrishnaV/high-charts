import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-double-bar',
  templateUrl: './double-bar.component.html',
  styleUrls: ['./double-bar.component.css']
})
export class DoubleBarComponent implements OnInit, OnChanges {
  @Input() filters: any;
  @Input() widgetConfig: any;

  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  isLoading = false; // Track loading state

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.isLoading = true; // Show loader on initial load
    this.initializeChart();
    this.fetchDataAndUpdateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters'] && !changes['filters'].firstChange) {
      this.isLoading = true; // Show loader when filters change
      this.fetchDataAndUpdateChart();
    }
  }

  private initializeChart(): void {
    if (this.widgetConfig) {
      this.chartOptions = {
        ...this.widgetConfig.data, // Merge with widgetConfig options
        series: [] // Initialize with empty series
      };
    }
  }

  private fetchDataAndUpdateChart(): void {
    if (!this.widgetConfig?.api?.path) {
      console.error('API URL is not defined in widgetConfig.');
      this.isLoading = false; // Hide loader if no API path
      return;
    }

    // const query = this.convertFiltersToQuery(this.filters);
    const query = this.widgetConfig?.api?.path
    const body = this.filters
    const url = `${this.widgetConfig.api.path}/${query}`;
    console.log(body, "body");

    this.http.post<any>(url, body).subscribe((res: any) => {
      console.log('Response received:', res);
      this.updateChart(res); // Update the chart with the received data
      this.isLoading = false; // Hide the loader
    }, (err: any) => {
      this.isLoading = false; // Hide the loader

    })
  }

  // private convertFiltersToQuery(filters: any): string {
  //   return Object.keys(filters)
  //     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filters[key])}`)
  //     .join('&');
  // }

  private updateChart(data: any): void {
    if (!this.chartOptions) return;

    this.chartOptions = {
      ...this.chartOptions,
      xAxis: {
        ...this.chartOptions.xAxis,
        categories: data.categories || []
      },
      series: [
        {
          type: 'bar',
          name: 'Series 1',
          data: data.series1 || []
        },
        {
          type: 'bar',
          name: 'Series 2',
          data: data.series2 || []
        }
      ]
    };
  }
}