import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('container1', {
      series: [{
        type: "line",
        data: [-10, -5, 0, 5, 10, 15, 10, 10, 5, 0, -5],
        zones: [{
          value: 0,
          color: '#f7a35c'
        }, {
          value: 10,
          color: '#7cb5ec'
        }, {
          color: '#90ed7d'
        }]
      }]
    });



    Highcharts.chart('container2', {
      chart: {
        type: 'spline'
      },

      legend: {
        symbolWidth: 80
      },

      plotOptions: {
        series: {
          color: '#000000',
          dashStyle: 'LongDash'
        }
      },

      series: [{
        type: 'line',
        data: [1, 3, 2, 4, 5, 4, 6, 2, 3, 5, 6]
      }, {
        type: 'line',
        data: [2, 4, 1, 3, 4, 2, 9, 1, 2, 3, 4, 5]
      }]
    });


    Highcharts.chart('container3', {
      chart: {
        type: 'line',
        zoomType: 'xy'
      },
      title: {
        text: 'Sample Line Chart with Crosshair and Tooltip Formatting'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true,
        formatter: function () {
          var points = this.points;
          var tooltip = '<span style="font-size: 10px">' + this.x + '</span><br/>';
          points?.forEach(function (point) {
            tooltip += '<span style="color:' + point.color + '">\u25CF</span> ' + point.series.name + ': <b>' + point.y + '</b><br/>';
          });
          return tooltip;
        }
      },
      series: [{
        type: 'line',
        name: 'Series 1',
        data: [5, 3, 4, 7, 2]
      }, {
        type: 'line',
        name: 'Series 2',
        data: [2, 4, 5, 2, 6]
      }]
    } as Highcharts.Options);

  }

}
