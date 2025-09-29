var chartDom1 = document.getElementById('grafico1');
var chart1 = echarts.init(chartDom1);
var option1 = {
    tooltip: { trigger: 'item' },
    legend: {
        bottom: '5%',
        left: 'center',
        textStyle: { color: '#fff' }
    },
    series: [{
        name: 'Clasificación',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: { borderRadius: 10 },
        label: { show: false, position: 'center' },
        emphasis: {
            label: { show: true, fontSize: 40, fontWeight: 'bold', color: '#fff' }
        },
        labelLine: { show: false },
        data: [
            { value: 73.6, name: '1.Renta Fija' },
            { value: 13.6, name: '2.Renta Variable' },
            { value: 6.7, name: '3.Alternativos' },
            { value: 5.1, name: '0.Liquidez' }
        ]
    }]
};
chart1.setOption(option1);
window.addEventListener('resize', () => chart1.resize());