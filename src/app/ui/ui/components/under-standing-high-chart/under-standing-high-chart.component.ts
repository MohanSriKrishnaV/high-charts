import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-under-standing-high-chart',
  templateUrl: './under-standing-high-chart.component.html',
  styleUrls: ['./under-standing-high-chart.component.css']
})
export class UnderStandingHighChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('container1', {
      chart: {
        plotBorderWidth: 1,
        marginLeft: 80
      },
      xAxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec'
        ]
      },
      yAxis: {
        labels: {
          formatter: function () {
            return 'frmt value' + this.value + ' %';
          }
        },
      },
      title: {
        text: 'My custom title',
        align: 'right', // Options: 'left', 'center', 'right'
        verticalAlign: 'top', // Options: 'top', 'middle', 'bottom'
        x: 0, // Horizontal offset
        y: 20, // Vertical offset
        style: {
          color: '#FF0000', // Font color
          fontSize: '20px', // Font size
          fontWeight: 'bold', // Font weight
          fontFamily: 'Arial, sans-serif', // Font family
          floating: true, // Default is false

        },
      },
      series: [{
        type: 'column', // Add the type property to specify the chart type

        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4
        ]
      }]
    });

    Highcharts.chart('container2', {
      chart: {
        alignTicks: true, // Set alignTicks to true to align the ticks
      },
      yAxis: [{ //--- Primary yAxis
        title: {
          text: 'Temperature'
        }
      }, { //--- Secondary yAxis
        title: {
          text: 'Rainfall'
        },
        opposite: true
      }],
      series: [{
        type: 'column',
        yAxis: 0,
        data: [
          49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4
        ]
      }, {
        type: 'column',
        yAxis: 1,
        data: [
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6
        ]
      }]
    });
    Highcharts.chart('container3', {
      chart: {
        renderTo: 'container',
        type: 'column'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        title: {
          text: 'Fruit Number'
        },
        tickInterval: 1
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        },
        tickInterval: 1
      },
      series: [{
        type: 'column',
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        type: 'column',
        data: [5, 7, 3]
      }]
    }
    );
    Highcharts.chart('container4', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Logarithmic Axis Example'
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5']
      },
      yAxis: {
        type: 'logarithmic',
        title: {
          text: 'Value'
        }
      },
      series: [{
        type: 'line', // Set the type to 'line' for a line chart
        name: 'Logarithmic Data',
        data: [1, 10, 100, 1000, 10000]
      }]
    });

    Highcharts.chart('container5', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Monthly Average Temperature'
      },
      subtitle: {
        text: 'Source: ' +
          '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
          'target="_blank">Wikipedia.com</a>'
      },
      xAxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec'
        ]
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        type: "line",
        name: 'Reggane',
        data: [
          16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
          22.0, 17.8
        ]
      }, {
        type: "line",
        name: 'Tallinn',
        data: [
          -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
          2.0, -0.9
        ]
      },
      {
        type: "line",
        name: 'paris',
        data: [
          13.0, 12.2, 33.1, 17.9, 12.2, 26.4, 19.8, 28.4, 15.5, 19.2,
          2.0, 7.8
        ]
      }]
    });
    Highcharts.chart('container6', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Axis Labels Rotation Example'
      },
      xAxis: {
        categories: ['Apples ', 'Oranges', 'Bananas', 'Grapes', 'Pears'],
        labels: {
          rotation: 45 // Rotate the x-axis labels by 45 degrees
        }
        // labels: {
        //   autoRotation: [-10, -20, -30, -40] // Specify rotation angles to try
        // }
      },
      yAxis: {
        title: {
          text: 'Fruit Count'
        }
      },
      series: [{
        type: "column",
        name: 'Fruit',
        data: [10, 15, 7, 20, 5]
      }]
    });

    Highcharts.chart('container7', {

      xAxis: {
        categories: [
          'January', 'February', 'March', 'April', 'May', 'June', 'July',
          'August', 'September', 'October', 'November', 'December'
        ],
        labels: {
          staggerLines: 3  //?r&d
        }
      },

      series: [{
        type: 'line',
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4
        ]
      }]
    });


  }
}
