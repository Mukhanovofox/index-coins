<template>
  <el-aside width="240px">
    <p class="label">Select Coin:</p>
    <ul class="coinsList">
      <li v-bind:key="item.id" v-for="item in list" :class="item.id === coin_form.coin_id?'active':''" @click="selectCoin(item.id)">{{ item.full_name }}
        ({{ item.name }})
      </li>
    </ul>
    <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :size="size"
    />
    <p class="copyr">Version 1.0<br>Oraclus 2022</p>
  </el-aside>
</template>

<script>
import { SELECT_COIN } from '@/store/modules/coins';
export default {
  name: 'AsideComponent',
  data: () => ({
    loading: false,
    list: [{
      "name": "BTC", "full_name": "Bitcoin", "id": "1"
    },
      {
        "name": "ETH", "full_name": "Ethereum", "id": "1027"
      },
      {
        "name": "USDT", "full_name": "Tether", "id": "825"
      },
      {
        "name": "USDC", "full_name": "USD Coin", "id": "3408"
      },
      {
        "name": "BNB", "full_name": "BNB", "id": "1839"
      },
      {
        "name": "BUSD", "full_name": "Binance USD", "id": "4687"
      },
      {
        "name": "ADA", "full_name": "Cardano", "id": "2010"
      },
      {
        "name": "XRP", "full_name": "XRP", "id": "52"
      },
      {
        "name": "SOL", "full_name": "Solana", "id": "5426"
      },
      {
        "name": "DOGE", "full_name": "Dogecoin", "id": "74"
      },
      {
        "name": "DOT", "full_name": "Polkadot", "id": "6636"
      },
      {
        "name": "DAI", "full_name": "Dai", "id": "4943"
      },
      {
        "name": "TRX", "full_name": "TRON", "id": "1958"
      },
      {
        "name": "LEO", "full_name": "UNUS SED LEO", "id": "3957"
      },
      {
        "name": "SHIB", "full_name": "Shiba Inu", "id": "5994"
      },
      {
        "name": "WBTC", "full_name": "Wrapped Bitcoin", "id": "3717"
      },
      {
        "name": "AVAX", "full_name": "Avalanche", "id": "5805"
      },
      {
        "name": "MATIC", "full_name": "Polygon", "id": "3890"
      },
      {
        "name": "UNI", "full_name": "Uniswap", "id": "7083"
      },
      {
        "name": "LTC", "full_name": "Litecoin", "id": "2"
      }]
  }),
  methods: {
    async selectCoin(id){
      await this.$store.dispatch(SELECT_COIN, id);
    }
  },
  created() {
  },
  computed: {
    coin_form() {
      return this.$store.getters.get_coin_form;
    },
  }
}
</script>
