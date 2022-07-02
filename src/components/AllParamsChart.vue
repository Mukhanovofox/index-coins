<template>
    <canvas id="AllParamsChart"></canvas>
</template>
<script>
    import Chart from 'chart.js/auto';

    export default {
        name: 'LineChart',
        props: {
            labels: [Object, Array],
            values: [Object, Array],
        },
        data: () => ({
            loading: false,
        }),
        mounted() {
            const ctx = document.getElementById('AllParamsChart').getContext('2d');
            // gradient1
            let gradient1 = ctx.createLinearGradient(0, 0, 0, 300);
            gradient1.addColorStop(0.2, '#b654a4');
            gradient1.addColorStop(0.6, '#5c4696');
            gradient1.addColorStop(1, 'transparent');
            // gradient2
            let gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
            gradient2.addColorStop(0, 'rgba(220, 38, 38, 0.53)');
            gradient2.addColorStop(0, 'rgba(220, 38, 38, 0.43)');
            gradient2.addColorStop(1, 'rgba(255, 255, 255, 0.1 )');
            // gradient3
            let gradient3 = ctx.createLinearGradient(0, 0, 0, 300);
            gradient3.addColorStop(0.2, '#b654a4');
            gradient3.addColorStop(0.6, '#5c4696');
            gradient3.addColorStop(1, 'transparent');
            // gradient4
            let gradient4 = ctx.createLinearGradient(0, 0, 0, 300);
            gradient4.addColorStop(0.2, '#b654a4');
            gradient4.addColorStop(0.6, '#5c4696');
            gradient4.addColorStop(1, 'transparent');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.labels,
                    datasets: [
                        {
                            label: 'Total Supply',
                            data: this.values.values1,
                            borderColor: '#ff84af',
                            fill: false,
                            backgroundColor: '#ff84af',
                            tension: 0.1
                        },
                        {
                            label: 'Market Cap',
                            data: this.values.values2,
                            borderColor: 'red',
                            fill: false,
                            backgroundColor: 'red',
                            tension: 0.1
                        },
                        {
                            label: 'Price',
                            data: this.values.values3,
                            borderColor: 'green',
                            fill: false,
                            backgroundColor: 'green',
                            tension: 0.1
                        },
                        {
                            label: 'Circulating Supply',
                            data: this.values.values4,
                            borderColor: 'blue',
                            fill: false,
                            backgroundColor: 'blue',
                            tension: 0.1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false,
                            ticks: {
                                color: '#5c4696',
                                padding: 10
                            },
                            grid: {
                                drawBorder: false,
                                color: '#323567',
                            },
                        },
                        xAxes: {
                            display: false
                        }
                    },
                    plugins: {
                        legend: {
                            display: true
                        },
                        tooltip: {
                            padding: 12,
                            intersect: false,
                            displayColors: true
                        }
                    },
                    hover: {
                        mode: 'label',
                        intersect: false
                    },
                    tooltips: {
                        mode: 'label'
                    }
                }
            });
            myChart;
        },
        methods: {},
    }
</script>
