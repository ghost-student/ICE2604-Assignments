var dom = document.getElementById("chart1");
var myChart = echarts.init(dom, 'macarons');
option = {
    title: {
        text: 'Sales of Top 10 carbrands in Feb, 2020',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: ['Geely', 'Volkswagen', 'Nissan', 'Chery', 'Toyota',
            'Changan', 'Mercedes-Benz', 'Audi', 'BMW', 'Honda']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [18210, 17218, 14841, 13625, 12035, 11311, 11295, 8105, 8039, 7459],
        type: 'bar',
        showBackground: false
    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}