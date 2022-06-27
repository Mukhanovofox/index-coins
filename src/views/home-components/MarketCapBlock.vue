<template>
  <div class="home">
    <LineChart v-if="chartData.labels && chartData.values" :labels="chartData.labels"
               :values="chartData.values"></LineChart>
  </div>
</template>

<script>
import LineChart from "@/components/MarketCapChart";

export default {
  components: {
    LineChart
  },
  data: () => ({
    loading: false,
    chartData: {
      labels: [],
      values: [],
    },
  }),
  methods: {
    createChartData() {
      let array1 = [];
      let array2 = [];
      this.coin_info.forEach(function (elem) {
        array1.push(elem['date']);
        array2.push(elem['market_cap']);
      });
      this.chartData.labels = array1;
      this.chartData.values = array2;
    }
  },
  created() {
    this.createChartData();
  },
  computed: {
    coin_info() {
      return this.$store.getters.get_coin_info;
    },
  }
}
</script>
