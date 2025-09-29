var chartDom3 = document.getElementById('main');
var chart3 = echarts.init(chartDom3, 'dark');
var option3 = {
    xAxis: {
        data: ['OCTUBRE','NOVIEMBRE','DICIEMBRE','ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE']
    },
    yAxis: {},
    series: [{
        type: 'candlestick',
        data: [
            [58.2, 49.898, 60.99, 48.01],
            [66.77, 56.8, 68.99, 55.6],
            [69.6, 67, 70.45, 65],
            [69, 70, 72.76, 66],
            [63.47, 67.28, 68.8, 61.73],
            [63.2, 64.9, 67.25, 60.35],
            [67.9, 63.2, 69.57, 55.11],
            [69.2, 67.5, 70, 67.01],
            [68.5, 68.4, 72, 66.01],
            [65.35, 68.1, 69.42, 62.57],
            [61.99, 64.4, 66.6, 60.65],
            [57.28, 62.1, 61.95, 42]
        ]
    }]
};
chart3.setOption(option3);
window.addEventListener('resize', () => chart3.resize());