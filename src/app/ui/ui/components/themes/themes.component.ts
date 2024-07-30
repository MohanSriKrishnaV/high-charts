import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import 'highcharts/themes/dark-unica'; // Import the dark-unica theme

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
    Highcharts.setOptions({
      chart: {
        backgroundColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, 'rgb(255, 255, 255)'],
            [1, 'rgb(240, 240, 255)']
          ]
        },
        borderWidth: 2,
        plotBackgroundColor: 'rgba(255, 255, 255, 0.9)',
        plotShadow: true,
        plotBorderWidth: 1
      }
    });


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
