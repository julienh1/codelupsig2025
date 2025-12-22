Highcharts.chart('container', {
    chart: {
        type: 'pie',
        zooming: {
            type: 'xy'
        },
        panning: {
            enabled: true,
            type: 'xy'
        },
        panKey: 'shift'
    },
    title: {
        text: 'Types de demande des utilisateurs du site'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        '(en %)'
    },
    plotOptions: {
        pie: {
            colors : [
                '#F54927',
                '#9F27F5',
                '#27F5DD',
                '#F5D327',
            ],
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Prestation',
                    y: 20
                },
                {
                    name: "Demande d'information",
                    sliced: true,
                    selected: true,
                    y: 40
                },
                {
                    name: 'Question',
                    y: 30
                },
                {
                    name: 'Autre',
                    y: 10
                }
            ]
        }
    ]
});
