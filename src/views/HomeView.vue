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
                <el-main v-loading="coin_loading">
                    <el-empty description="Empty" v-if="coin_info.length <= 0"></el-empty>
                    <el-row :gutter="20" v-if="coin_info.length > 0">
                        <el-col :xs="24" :sm="12" :md="12" :lg="6">
                            <el-card class="chardCard">
                                <div class="content">
                                    <h3>Total Supply</h3>
                                    <TotalSupplyBlock v-loading="coin_loading"/>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="12" :lg="6">
                            <el-card class="chardCard">
                                <div class="content">
                                    <h3>Market Cap</h3>
                                    <MarketCapBlock v-loading="coin_loading"/>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="12" :lg="6">
                            <el-card class="chardCard">
                                <div class="content">
                                    <h3>Price</h3>
                                    <PriceBlock v-loading="coin_loading"/>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="12" :lg="6">
                            <el-card class="chardCard">
                                <div class="content">
                                    <h3>Circulating Supply</h3>
                                    <CirculatingSupplyBlock v-loading="coin_loading"/>
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
                                <CoinInfoTable v-loading="coin_loading"/>
                            </el-card>
                        </el-col>
                        <el-col :span="24">
                            <el-card>
                                <template #header>
                                    <div class="card-header">
                                        <span>All Params (Click to hide or show)</span>
                                    </div>
                                </template>
                                <AllParamsBlock v-loading="coin_loading"/>
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
    import AllParamsBlock from "@/views/home-components/AllParamsBlock";
    // import {GET_COIN_INFO} from "@/store/modules/coins";

    export default {
        components: {
            Aside,
            TotalSupplyBlock,
            MarketCapBlock,
            PriceBlock,
            CirculatingSupplyBlock,
            CoinInfoTable,
            AllParamsBlock
        },
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
        watch:{
            coin_loading:{
                handler(newVal){
                    if(newVal === false){
                        this.$message.success('Data Updated');
                    }
                }
            }
        },
        computed: {
            coin_loading() {
                return this.$store.getters.get_coin_loading;
            },
            coin_info() {
                return this.$store.getters.get_coin_info;
            },
        }
    }
</script>
