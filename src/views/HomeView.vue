<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row type="flex" align="middle">
          <p class="logo">Oraclus</p>
        </el-row>
      </el-header>
      <el-container class="fatherContainer">
        <Aside/>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-card class="chardCard">
                <div class="content">
                  <h3>Total Supply</h3>
                  <TotalSupplyBlock v-if="!loading" />
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="chardCard">
                <div class="content">
                  <h3>Market Cap</h3>
                  <MarketCapBlock v-if="!loading" />
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="chardCard">
                <div class="content">
                  <h3>Price</h3>
                  <PriceBlock v-if="!loading" />
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="chardCard">
                <div class="content">
                  <h3>Circulating Supply</h3>
                  <CirculatingSupplyBlock v-if="!loading" />
                </div>
              </el-card>
            </el-col>
            <el-col :span="24">
              <el-card>
                <template #header>
                  <div class="card-header">
                    <span>Information about the selected coin</span>
                  </div>
                </template>
                <CoinInfoTable/>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/views/layout-components/Aside";
import TotalSupplyBlock from "@/views/home-components/TotalSupplyBlock";
import MarketCapBlock from "@/views/home-components/MarketCapBlock";
import PriceBlock from "@/views/home-components/PriceBlock";
import CirculatingSupplyBlock from "@/views/home-components/CirculatingSupplyBlock";
import CoinInfoTable from "@/views/home-components/CoinInfoTable";
// import {GET_COIN_INFO} from "@/store/modules/coins";

export default {
  components: {
    Aside,
    TotalSupplyBlock,
    MarketCapBlock,
    PriceBlock,
    CirculatingSupplyBlock,
    CoinInfoTable
  },
  data: () => ({
    loading: false
  }),
  methods: {
    // async getCoinInfo() {
    //     try {
    //         await this.$store.dispatch(GET_COIN_INFO);
    //     } catch (e) {
    //         console.log(e)
    //     }
    // },
  },
  created() {
    // this.getCoinInfo();
  },
}
</script>
