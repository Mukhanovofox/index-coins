<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row type="flex" align="middle">
                    <p class="logo">Index Coins</p>
                </el-row>
            </el-header>
            <el-container class="fatherContainer">
                <el-aside width="240px">
                    <p class="label">Select Coin:</p>
                    <ul class="coinsList">
                        <li v-bind:key="item.id" v-for="item in list" :class="item.id === activeId?'active':''">{{ item.full_name }} ({{ item.name }})</li>
                    </ul>
                    <p class="copyr">Version 1.0<br>@Index Coins, 2022</p>
                </el-aside>
                <el-main>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-card class="chardCard">
                                <h3>Total Supply</h3>
                                <TotalSupplyBlock v-if="!loading" :coins="coins"/>
                            </el-card>
                        </el-col>
                        <el-col :span="12">
                            <el-card class="chardCard">
                                <h3>Market Cap</h3>
                                <MarketCapBlock v-if="!loading" :coins="coins"/>
                            </el-card>
                        </el-col>
                        <el-col :span="12">
                            <el-card class="chardCard">
                                <h3>Price</h3>
                                <PriceBlock v-if="!loading" :coins="coins"/>
                            </el-card>
                        </el-col>
                        <el-col :span="12">
                            <el-card class="chardCard">
                                <h3>Circulating Supply</h3>
                                <CirculatingSupplyBlock v-if="!loading" :coins="coins"/>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import TotalSupplyBlock from "@/views/home-components/TotalSupplyBlock";
    import MarketCapBlock from "@/views/home-components/MarketCapBlock";
    import PriceBlock from "@/views/home-components/PriceBlock";
    import CirculatingSupplyBlock from "@/views/home-components/CirculatingSupplyBlock";
    // import {GET_COINS_SUPPLY} from "@/store/modules/coins";

    export default {
        name: 'HomeView',
        components: {
            TotalSupplyBlock,
            MarketCapBlock,
            PriceBlock,
            CirculatingSupplyBlock
        },
        data: () => ({
            loading: false,
            activeId: '1',
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
                }],
            coins: [{
                "id": 1021338,
                "date": "2022-06-01",
                "coin_id": 1,
                "coin_symbol": "BTC",
                "coin_name": "Bitcoin",
                "market_cap": 564669039321.6759,
                "price_USD": 29632.612045788588,
                "total_supply": 19055662.0,
                "circulating_supply": 19055662.0
            }, {
                "id": 1024143,
                "date": "2022-06-02",
                "coin_id": 1,
                "coin_symbol": "BTC",
                "coin_name": "Bitcoin",
                "market_cap": 577986087412.4869,
                "price_USD": 30330.268227433735,
                "total_supply": 19056412.0,
                "circulating_supply": 19056412.0
            }, {
                "id": 1026947,
                "date": "2022-06-03",
                "coin_id": 1,
                "coin_symbol": "BTC",
                "coin_name": "Bitcoin",
                "market_cap": 568131172992.1445,
                "price_USD": 29811.686274019405,
                "total_supply": 19057331.0,
                "circulating_supply": 19057331.0
            }, {
                "id": 1029751,
                "date": "2022-06-04",
                "coin_id": 1,
                "coin_symbol": "BTC",
                "coin_name": "Bitcoin",
                "market_cap": 568127412099.5042,
                "price_USD": 29810.18904653577,
                "total_supply": 19058162.0,
                "circulating_supply": 19058162.0
            }, {
                "id": 1032552,
                "date": "2022-06-05",
                "coin_id": 1,
                "coin_symbol": "BTC",
                "coin_name": "Bitcoin",
                "market_cap": 570718012298.9373,
                "price_USD": 29944.62765625897,
                "total_supply": 19059112.0,
                "circulating_supply": 19059112.0
            }, {
                "id": 1035354,
                "date": "2022-06-06",
                "coin_id": 1,
                "coin_symbol": "BTC",
                "coin_name": "Bitcoin",
                "market_cap": 600539349351.5684,
                "price_USD": 31507.84731933366,
                "total_supply": 19059993.0,
                "circulating_supply": 19059993.0
            }, {
                "id": 1038157,
                "date": "2022-06-07",
                "coin_id": 1,
                "coin_symbol": "BTC",
                "coin_name": "Bitcoin",
                "market_cap": 598883469419.0127,
                "price_USD": 31419.22766159329,
                "total_supply": 19061050.0,
                "circulating_supply": 19061050.0
            }, {
                "id": 1040959,
                "date": "2022-06-08",
                "coin_id": 1,
                "coin_symbol": "BTC",
                "coin_name": "Bitcoin",
                "market_cap": 578800033861.6361,
                "price_USD": 30363.849115056793,
                "total_supply": 19062143.0,
                "circulating_supply": 19062143.0
            }, {
                "id": 1043757,
                "date": "2022-06-09",
                "coin_id": 1,
                "coin_symbol": "BTC",
                "coin_name": "Bitcoin",
                "market_cap": 574896037851.4813,
                "price_USD": 30157.582077107487,
                "total_supply": 19063068.0,
                "circulating_supply": 19063068.0
            }, {
                "id": 1046541,
                "date": "2022-06-10",
                "coin_id": 1,
                "coin_symbol": "BTC",
                "coin_name": "Bitcoin",
                "market_cap": 557550178293.3081,
                "price_USD": 29246.204986446617,
                "total_supply": 19064018.0,
                "circulating_supply": 19064018.0
            }],
        }),
        methods: {
            // async getCoins() {
            //     try {
            //         await this.$store.dispatch(GET_COINS_SUPPLY);
            //     } catch (e) {
            //         console.log(e)
            //     }
            // },
        },
        created() {
            // this.getCoins();
        },
    }
</script>
