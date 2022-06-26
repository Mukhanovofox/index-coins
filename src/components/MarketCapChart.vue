<template>
    <canvas id="MarketCapChart"></canvas>
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
            const ctx = document.getElementById('MarketCapChart').getContext('2d');
            let gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, '#ffd56e');
            gradient.addColorStop(0.3, '#846e38');
            gradient.addColorStop(1, 'transparent');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.labels,
                    datasets: [{
                        label: 'test',
                        data: this.values,
                        borderColor: '#ffd56e',
                        fill: true,
                        backgroundColor: gradient,
                        tension: 0.1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false,
                            ticks: {
                                color: '#c1c1c1',
                                padding: 10
                            }
                        },
                        xAxes : {
                            display : false
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            padding: 12,
                            intersect: false,
                            displayColors: false
                        }
                    },
                    hover: {
                        mode: 'index',
                        intersect: false
                    }
                }
            });
            myChart;
        },
        methods: {},
    }
</script>
