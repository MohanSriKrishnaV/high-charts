import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock'; // Import Highstock module
import { HighchartsService } from 'src/app/ui/services/highcharts.service';

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {

  constructor(private highchartsService: HighchartsService) { }

  ngOnInit(): void {
    this.getPoints()
  }
  getPoints() {
    this.highchartsService.getPoints().subscribe(
      (data: any) => {
        console.log(data, "data");
        Highcharts.stockChart('container', {
          rangeSelector: {
            selected: 1
          },

          title: {
            text: 'AAPL Stock Price'
          },

          series: [{
            type: 'line', // Specify the type of series

            name: 'AAPL',
            data: data,
            tooltip: {
              valueDecimals: 2
            }
          }]
        });
        // this.points = data;
        // console.log(this.points);
      },
      (error: any) => {
        console.error('Error fetching points', error);
      }
    );
  }
}


