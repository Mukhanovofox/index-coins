<template>
    <div class="home">
        <LineChart v-if="chartData.labels && chartData.values" :labels="chartData.labels" :values="chartData.values"></LineChart>
    </div>
</template>

<script>
    import LineChart from "@/components/CirculatingSupplyChart";

    export default {
        components:{
            LineChart
        },
        props:{
            coins: [Object, Array]
        },
        data: () => ({
            loading: false,
            chartData: {
                labels: [],
                values: [],
            },
        }),
        methods: {
            createChartData(){
                let array1 = [];
                let array2 = [];
                this.coins.forEach(function (elem) {
                    array1.push(elem['date']);
                    array2.push(elem['circulating_supply']);
                });
                this.chartData.labels = array1;
                this.chartData.values = array2;
            }
        },
        created() {
            this.createChartData();
        },
    }
</script>
