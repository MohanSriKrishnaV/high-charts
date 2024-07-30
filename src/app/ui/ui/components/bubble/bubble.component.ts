import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
// import HC_bubble from 'highcharts/modules/bubble';

// Initialize the modules
HC_more(Highcharts);
// HC_bubble(Highcharts);

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('container1', {
      chart: {
        type: 'bubble'
      },
      legend: {
        bubbleLegend: {
          enabled: true
        }
      },
      series: [{
        type: "bubble",
        data: [
          [9, 81, 63],
          [98, 5, 89],
          [51, 50, 73],
          [41, 22, 14],
          [58, 24, 20]
        ]
      }]
    });
    Highcharts.chart('container2', {
      chart: {
        type: 'bubble'
      },
      legend: {
        bubbleLegend: {
          enabled: true,
          minSize: 20,
          maxSize: 60,
          ranges: [{
            value: 14
          }, {
            value: 89
          }]
        }
      },
      series: [{
        type: "bubble",
        minSize: 20,
        maxSize: 60,
        data: [
          [9, 81, 63],
          [98, 5, 89],
          [51, 50, 73],
          [41, 22, 14],
          [58, 24, 20]
        ]
      }]
    });


    Highcharts.chart('container3', {
      chart: {
        type: 'column',
        scrollablePlotArea: {
          minWidth: 1200 // Set the minimum width to trigger horizontal scrolling
        }
      },
      // navigator: {
      //   enabled: true
      // },
      title: {
        text: 'Sample Column Chart with Scrolling Enabled'
      },
      xAxis: {
        scrollbar: { enabled: true },
        categories: ['Apples', 'Oranges', 'Bananas', 'Grapes', 'Pears', 'Pineapples', 'Mangoes', 'Kiwi', 'Strawberries', 'Watermelon', 'Peaches', 'Cherries', 'Apples', 'Oranges', 'Bananas', 'Grapes', 'Pears', 'Pineapples', 'Mangoes', 'Kiwi', 'Strawberries', 'Watermelon', 'Peaches', 'Cherries', 'Apples', 'Oranges', 'Bananas', 'Grapes', 'Pears', 'Pineapples', 'Mangoes', 'Kiwi', 'Strawberries', 'Watermelon', 'Peaches', 'Cherries', 'Apples', 'Oranges', 'Bananas', 'Grapes', 'Pears', 'Pineapples', 'Mangoes', 'Kiwi', 'Strawberries', 'Watermelon', 'Peaches', 'Cherries']
      },
      yAxis: {
        title: {
          text: 'Fruit Quantity'
        }
      },
      series: [{
        type: "line",
        name: 'Quantity',
        data: [30, 25, 20, 15, 10, 8, 6, 4, 3, 2, 1, 1, 30, 25, 20, 15, 10, 8, 6, 4, 3, 2, 1, 1, 30, 25, 20, 15, 10, 8, 6, 4, 3, 2, 1, 1, 30, 25, 20, 15, 10, 8, 6, 4, 3, 2, 1, 1]
      }]
    });

    // Highcharts.chart('container4', {
    //   data: {
    //     csv: document?.getElementById('csv')?.innerHTML
    //   },
    //   title: {
    //     text: 'Temperature by the hour'
    //   },
    //   subtitle: {
    //     text: 'Drag mouse to zoom in'
    //   },
    //   chart: {
    //     type: 'heatmap',
    //     zooming: {
    //       type: 'xy'
    //     }
    //   },
    //   xAxis: {
    //     min: Date.UTC(2015, 4, 1),
    //     max: Date.UTC(2015, 4, 30),
    //     scrollbar: {
    //       enabled: true
    //     }
    //   },
    //   yAxis: {
    //     minPadding: 0,
    //     maxPadding: 0,
    //     startOnTick: false,
    //     endOnTick: false,
    //     scrollbar: {
    //       enabled: true
    //     },
    //     labels: {
    //       format: '{value}:00'
    //     },
    //     title: {
    //       text: 'Hour'
    //     }
    //   },
    //   colorAxis: {
    //     stops: [
    //       [0, '#3060cf'],
    //       [0.5, '#fffbbc'],
    //       [0.9, '#c4463a']
    //     ],
    //     min: -10,
    //     max: 20
    //   },
    //   series: [{
    //     type: "heatmap",
    //     colsize: 24 * 36e5
    //   }]
    // });

  }

}
