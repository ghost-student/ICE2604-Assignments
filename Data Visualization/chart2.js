var dom = document.getElementById("chart2");
var myChart = echarts.init(dom, 'macarons');
option = {
    title: {
        text: 'Market Shares of Top 10 Carbrands in Feb, 2020',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}%'
    },
    legend: {
        left: 'center',
        top: '90%',
        data: ['Geely', 'Volkswagen', 'Nissan', 'Chery', 'Toyota',
            'Changan', 'Mercedes-Benz', 'Audi', 'BMW', 'Honda']
    },
    series: [
        {
            type: 'pie',
            radius: [25, 200],
            roseType: 'radius',
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                { value: 8.47, name: 'Geely' },
                { value: 8.01, name: 'Volkswagen' },
                { value: 6.90, name: 'Nissan' },
                { value: 6.34, name: 'Chery' },
                { value: 5.60, name: 'Toyota' },
                { value: 5.26, name: 'Changan' },
                { value: 5.25, name: 'Mercedes-Benz' },
                { value: 3.77, name: 'Audi' },
                { value: 3.74, name: 'BMW' },
                { value: 3.47, name: 'Honda' },

            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}