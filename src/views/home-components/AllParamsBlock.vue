<template>
    <div class="home">
        <LineChart v-if="chartData.labels && chartData.values1 && chartData.values2 && chartData.values3 && chartData.values4 && show" :labels="chartData.labels"
                   :values="chartData"></LineChart>
    </div>
</template>

<script>
    import LineChart from "@/components/AllParamsChart";

    export default {
        components: {
            LineChart
        },
        data: () => ({
            show: false,
            chartData: {
                labels: [],
                values1: [],
                values2: [],
                values3: [],
                values4: [],
            },
        }),
        methods: {
            async createChartData() {
                this.show = false;
                let date = [];
                let array1 = [];
                let array2 = [];
                let array3 = [];
                let array4 = [];
                await this.coin_info.forEach(function (elem) {
                    date.push(elem['date']);
                    array1.push(elem['total_supply']);
                    array2.push(elem['market_cap']);
                    array3.push(elem['price_USD']);
                    array4.push(elem['circulating_supply']);
                });
                this.chartData.labels = date;
                this.chartData.values1 = array1;
                this.chartData.values2 = array2;
                this.chartData.values3 = array3;
                this.chartData.values4 = array4;
                this.show = true;
            }
        },
        created() {
            this.createChartData();
        },
        watch: {
            coin_info: {
                handler() {
                    this.createChartData();
                }
            }
        },
        computed: {
            coin_info() {
                return this.$store.getters.get_coin_info;
            },
        }
    }
</script>
