import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('container1', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Monthly Sales Data'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
        title: {
          text: 'Revenue'
        }
      },
      series: [{
        type: 'column', // Specify the type of series
        name: 'Sales',
        data: [150, 200, 180, 250, 210, 300]
      }]
    });


    Highcharts.chart('container2', {
      chart: {
        type: 'column' // Specify the type of chart as column
      },
      title: {
        text: 'Monthly Sales Data'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
        title: {
          text: 'Revenue'
        }
      },
      series: [{
        name: 'Product A',
        data: [150, 200, 180, 250, 210, 300],
        type: 'column'
      }, {
        name: 'Product B',
        data: [120, 180, 160, 200, 190, 280]
        ,
        type: 'column'

      }]
    });

    Highcharts.chart('container3', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4],
        type: 'column'
      }, {
        name: 'John',
        data: [5, 7, 3],
        type: 'column'
      }]
    });

  }
}
