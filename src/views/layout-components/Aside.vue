<template>
    <el-aside width="240px">
        <p class="label">Select Coin:</p>
        <ul class="coinsList">
            <li v-bind:key="item.id" v-for="item in list" :class="item.id === coin_form.coin_id?'active':''"
                @click="selectCoin(item.id)">{{ item.full_name }}
                ({{ item.name }})
            </li>
        </ul>
        <el-date-picker
                v-model="date_range"
                type="daterange"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
                :size="size"
                @change="getCoinInfo"
        />
        <p class="copyr">Version 1.0<br>Oraclus 2022</p>
    </el-aside>
</template>

<script>
    import {SELECT_COIN_OR_DATE_RANGE} from '@/store/modules/coins';

    export default {
        name: 'AsideComponent',
        data: () => ({
            loading: false,
            selected_coin_id: '',
            date_range: [],
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
            async getCoinInfo() {
                let form = {
                    "coin_id": this.selected_coin_id,
                    "start_date": this.date_range[0],
                    "end_date": this.date_range[1]
                };
                await this.$store.dispatch(SELECT_COIN_OR_DATE_RANGE, form);
            },
            async selectCoin(id) {
                this.selected_coin_id = id;
                this.getCoinInfo();
            },
            defaultInfo(){
                this.selected_coin_id = this.coin_form.coin_id;
                this.date_range[0] = this.coin_form.start_date;
                this.date_range[1] = this.coin_form.end_date;
                this.getCoinInfo();
            }
        },
        created() {
            this.defaultInfo();
        },
        computed: {
            coin_form() {
                return this.$store.getters.get_coin_form;
            },
        }
    }
</script>
