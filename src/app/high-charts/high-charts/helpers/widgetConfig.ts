import { Options, SeriesOptionsType } from 'highcharts';

export type WidgetResponse = {
    id: string;
    data: Options;  // Highcharts options for chart configuration
    api?: any
};

export function getResponseById(id: string): WidgetResponse {
    const responses: { [key: string]: WidgetResponse } = {
        'widget1': {
            id: '1',
            data: {
                chart: { type: 'line' },
                title: { text: 'Widget 1 Chart' },
                series: [
                    {
                        type: 'line',
                        name: 'Series 1',
                        data: [1, 2, 3, 4, 5]  // Example data
                    }
                ]
            },
            api: { path: "/hyee" },

        },
        'widget2': {
            id: '2',
            data: {
                chart: { type: 'bar' },
                title: { text: 'Widget 2 Chart' },
                series: [
                    {
                        type: 'bar',
                        name: 'Series 2',
                        data: [5, 4, 3, 2, 1]  // Example data
                    }
                ]
            }
        },
        'widget3': {
            id: '3',
            data: {
                chart: { type: 'pie' },
                title: { text: 'Widget 3 Chart' },
                series: [
                    {
                        type: 'pie',
                        name: 'Share',
                        data: [
                            ['A', 5],
                            ['B', 3],
                            ['C', 2]
                        ]  // Example data
                    }
                ]
            }
        },
        'default': {
            id: 'default',
            data: {
                chart: { type: 'line' },
                title: { text: 'Default Chart' },
                series: [
                    {
                        type: 'line',
                        name: 'Default Series',
                        data: [1, 2, 3, 4]  // Example data
                    }
                ]
            }
        }
    };

    return responses[id] || responses['default'];
}
