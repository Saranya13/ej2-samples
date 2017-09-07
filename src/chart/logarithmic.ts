import { Chart, LineSeries, DateTime, Logarithmic, Legend, Marker, Tooltip, ILoadedEventArgs } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, DateTime, Logarithmic, Legend, Marker, Tooltip);

/**
 * Logarithmic Axis
 */
this.default = (): void => {
    let chart: Chart = new Chart({

        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Years',
            labelFormat: 'y',
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift'
        },

        //Initializing Primary Y Axis
        primaryYAxis:
        {
            valueType: 'Logarithmic',
            edgeLabelPlacement: 'Shift',
            minorTicksPerInterval: 5,
            majorGridLines: { width: 1.5 },
            minorTickLines: { width: 0, height: 4 },
            minimum: 0,
            maximum: 100000,
            interval: 1,
            title: 'Profit ($)',
            labelFormat: '${value}'
        },

        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: [
                    { x: new Date(1995, 0, 1), y: 80 },
                    { x: new Date(1996, 0, 1), y: 200 },
                    { x: new Date(1997, 0, 1), y: 400 },
                    { x: new Date(1998, 0, 1), y: 600 },
                    { x: new Date(1999, 0, 1), y: 700 },
                    { x: new Date(2000, 0, 1), y: 1400 },
                    { x: new Date(2001, 0, 1), y: 2000 },
                    { x: new Date(2002, 0, 1), y: 4000 },
                    { x: new Date(2003, 0, 1), y: 6000 },
                    { x: new Date(2004, 0, 1), y: 8000 },
                    { x: new Date(2005, 0, 1), y: 11000 }],
                xName: 'x', width: 2,
                yName: 'y', name: 'Product X',
                marker: {
                    visible: true, height: 10, width: 10
                }
            }
        ],

        //Initializing Chart title
        title: 'Product X Growth [1995-2005]', legendSettings: { visible: false },
        tooltip: { enable: true, format: '${series.name}<br> ${point.x} : ${point.y}' },
        load: (args: ILoadedEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            args.chart.theme = (selectedTheme && selectedTheme.indexOf('fabric') > -1) ? 'Fabric' : 'Material';
        }
    });
    chart.appendTo('#container');
};