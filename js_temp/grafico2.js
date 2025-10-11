var chartDom2 = document.getElementById('grafico3');
var chart2 = echarts.init(chartDom2);
var option2 = {
    backgroundColor: '#002E61',
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { textStyle: { color: '#fff' } },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine: { lineStyle: { color: '#fff' } },
        axisLabel: { color: '#fff' }
    },
    yAxis: {
        type: 'category',
        data: ['AGOSTO','JULIO','JUNIO','MAYO','ABRIL','MARZO','FEBRERO','ENERO'],
        axisLine: { lineStyle: { color: '#fff' } },
        axisLabel: { color: '#fff' }
    },
    series: [
        { name: 'Operó', type: 'bar', data: [5, 25, 20, 35, 33, 32, 29, 57] },
        { name: 'No Operó', type: 'bar', data: [19, 19, 14, 10, 14, 14, 9, 13] }
    ]
};
chart2.setOption(option2);
window.addEventListener('resize', () => chart2.resize());