var dom = document.getElementById("chart3");
var myChart = echarts.init(dom, 'macarons');
option = {
    title: {
        text: 'Nationality and Sales of Top 10 Carbrands in Feb, 2020',
        left: 'center'
    },
    legend: {
        data: ['Geely', 'Volkswagen', 'Nissan', 'Chery', 'Toyota',
            'Changan', 'Mercedes-Benz', 'Audi', 'BMW', 'Honda'],
        top: "10%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['Germany', 'China', 'Japan']
    },
    series: [
        {
            name: 'Geely',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [, 18210,]
        },
        {
            name: 'Volkswagen',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [17218, ,]
        },
        {
            name: 'Nissan',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [, , 14841]
        },
        {
            name: 'Chery',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [, 13625,]
        },
        {
            name: 'Toyota',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [, , 12035]
        },
        {
            name: 'Changan',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [, 11311,]
        },
        {
            name: 'Mercedes-Benz',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [11295, ,]
        },
        {
            name: 'Audi',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [8105, ,]
        },
        {
            name: 'BMW',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [8039, ,]
        },
        {
            name: 'Honda',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [, , 7459]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}