<template>
    <el-aside width="240px">
        <p class="label">Select Date:</p>
        <el-date-picker
                v-model="date_range"
                type="daterange"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                range-separator="-"
                start-placeholder="Start date"
                end-placeholder="End date"
                :size="size"
                :editable="false"
                @change="getCoinInfo"
        />
        <p class="label">Select Coin:</p>
        <el-input
                v-model="filterInput"
                class="searchInput"
                placeholder="Coin Search"
        />
        <p class="clear" v-if="filteredList.length <= 0">Not found</p>
        <ul class="coinsList" v-if="filteredList.length > 0">
            <li v-bind:key="item.id" v-for="item in filteredList" :class="item.id === coin_form.coin_id?'active':''"
                @click="selectCoin(item.id)">{{ item.full_name }}
                ({{ item.name }})
            </li>
        </ul>
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
            filterInput: '',
            list: [
                {
                   "id": "1",
                    "name": "BTC",
                    "full_name": "Bitcoin"
                },
                {
                   "id": "1027",
                    "name": "ETH",
                    "full_name": "Ethereum"
                },
                {
                   "id": "825",
                    "name": "USDT",
                    "full_name": "Tether"
                },
                {
                   "id": "3408",
                    "name": "USDC",
                    "full_name": "USD Coin"
                },
                {
                   "id": "1839",
                    "name": "BNB",
                    "full_name": "BNB"
                },
                {
                   "id": "4687",
                    "name": "BUSD",
                    "full_name": "Binance USD"
                },
                {
                   "id": "2010",
                    "name": "ADA",
                    "full_name": "Cardano"
                },
                {
                   "id": "52",
                    "name": "XRP",
                    "full_name": "XRP"
                },
                {
                   "id": "5426",
                    "name": "SOL",
                    "full_name": "Solana"
                },
                {
                   "id": "74",
                    "name": "DOGE",
                    "full_name": "Dogecoin"
                },
                {
                   "id": "6636",
                    "name": "DOT",
                    "full_name": "Polkadot"
                },
                {
                   "id": "4943",
                    "name": "DAI",
                    "full_name": "Dai"
                },
                {
                   "id": "1958",
                    "name": "TRX",
                    "full_name": "TRON"
                },
                {
                   "id": "3957",
                    "name": "LEO",
                    "full_name": "UNUS SED LEO"
                },
                {
                   "id": "5994",
                    "name": "SHIB",
                    "full_name": "Shiba Inu"
                },
                {
                   "id": "3717",
                    "name": "WBTC",
                    "full_name": "Wrapped Bitcoin"
                },
                {
                   "id": "5805",
                    "name": "AVAX",
                    "full_name": "Avalanche"
                },
                {
                   "id": "3890",
                    "name": "MATIC",
                    "full_name": "Polygon"
                },
                {
                   "id": "7083",
                    "name": "UNI",
                    "full_name": "Uniswap"
                },
                {
                   "id": "2",
                    "name": "LTC",
                    "full_name": "Litecoin"
                },
                {
                   "id": "4195",
                    "name": "FTT",
                    "full_name": "FTX Token"
                },
                {
                   "id": "1975",
                    "name": "LINK",
                    "full_name": "Chainlink"
                },
                {
                   "id": "3635",
                    "name": "CRO",
                    "full_name": "Cronos"
                },
                {
                   "id": "512",
                    "name": "XLM",
                    "full_name": "Stellar"
                },
                {
                   "id": "6535",
                    "name": "NEAR",
                    "full_name": "NEAR Protocol"
                },
                {
                   "id": "4030",
                    "name": "ALGO",
                    "full_name": "Algorand"
                },
                {
                   "id": "1831",
                    "name": "BCH",
                    "full_name": "Bitcoin Cash"
                },
                {
                   "id": "3794",
                    "name": "ATOM",
                    "full_name": "Cosmos"
                },
                {
                   "id": "328",
                    "name": "XMR",
                    "full_name": "Monero"
                },
                {
                   "id": "1321",
                    "name": "ETC",
                    "full_name": "Ethereum Classic"
                },
                {
                   "id": "3077",
                    "name": "VET",
                    "full_name": "VeChain"
                },
                {
                   "id": "1966",
                    "name": "MANA",
                    "full_name": "Decentraland"
                },
                {
                   "id": "4558",
                    "name": "FLOW",
                    "full_name": "Flow"
                },
                {
                   "id": "4642",
                    "name": "HBAR",
                    "full_name": "Hedera"
                },
                {
                   "id": "8916",
                    "name": "ICP",
                    "full_name": "Internet Computer"
                },
                {
                   "id": "6892",
                    "name": "EGLD",
                    "full_name": "Elrond"
                },
                {
                   "id": "18876",
                    "name": "APE",
                    "full_name": "ApeCoin"
                },
                {
                   "id": "2280",
                    "name": "FIL",
                    "full_name": "Filecoin"
                },
                {
                   "id": "2416",
                    "name": "THETA",
                    "full_name": "Theta Network"
                },
                {
                   "id": "2011",
                    "name": "XTZ",
                    "full_name": "Tezos"
                },
                {
                   "id": "6210",
                    "name": "SAND",
                    "full_name": "The Sandbox"
                },
                {
                   "id": "5665",
                    "name": "HNT",
                    "full_name": "Helium"
                },
                {
                   "id": "2563",
                    "name": "TUSD",
                    "full_name": "TrueUSD"
                },
                {
                   "id": "3602",
                    "name": "BSV",
                    "full_name": "Bitcoin SV"
                },
                {
                   "id": "6783",
                    "name": "AXS",
                    "full_name": "Axie Infinity"
                },
                {
                   "id": "2087",
                    "name": "KCS",
                    "full_name": "KuCoin Token"
                },
                {
                   "id": "3330",
                    "name": "USDP",
                    "full_name": "Pax Dollar"
                },
                {
                   "id": "1765",
                    "name": "EOS",
                    "full_name": "EOS"
                },
                {
                   "id": "1437",
                    "name": "ZEC",
                    "full_name": "Zcash"
                },
                {
                   "id": "7278",
                    "name": "AAVE",
                    "full_name": "Aave"
                },
                {
                   "id": "1518",
                    "name": "MKR",
                    "full_name": "Maker"
                },
                {
                   "id": "1720",
                    "name": "MIOTA",
                    "full_name": "IOTA"
                },
                {
                   "id": "2502",
                    "name": "HT",
                    "full_name": "Huobi Token"
                },
                {
                   "id": "5068",
                    "name": "USDN",
                    "full_name": "Neutrino USD"
                },
                {
                   "id": "6719",
                    "name": "GRT",
                    "full_name": "The Graph"
                },
                {
                   "id": "16086",
                    "name": "BTT",
                    "full_name": "BitTorrentNew"
                },
                {
                   "id": "10791",
                    "name": "XEC",
                    "full_name": "eCash"
                },
                {
                   "id": "4256",
                    "name": "KLAY",
                    "full_name": "Klaytn"
                },
                {
                   "id": "19891",
                    "name": "USDD",
                    "full_name": "USDD"
                },
                {
                   "id": "3897",
                    "name": "OKB",
                    "full_name": "OKB"
                },
                {
                   "id": "3513",
                    "name": "FTM",
                    "full_name": "Fantom"
                },
                {
                   "id": "1274",
                    "name": "WAVES",
                    "full_name": "Waves"
                },
                {
                   "id": "4157",
                    "name": "RUNE",
                    "full_name": "THORChain"
                },
                {
                   "id": "3155",
                    "name": "QNT",
                    "full_name": "Quant"
                },
                {
                   "id": "1376",
                    "name": "NEO",
                    "full_name": "Neo"
                },
                {
                   "id": "4705",
                    "name": "PAXG",
                    "full_name": "PAX Gold"
                },
                {
                   "id": "1697",
                    "name": "BAT",
                    "full_name": "Basic Attention Token"
                },
                {
                   "id": "4066",
                    "name": "CHZ",
                    "full_name": "Chiliz"
                },
                {
                   "id": "1934",
                    "name": "LRC",
                    "full_name": "Loopring"
                },
                {
                   "id": "2469",
                    "name": "ZIL",
                    "full_name": "Zilliqa"
                },
                {
                   "id": "131",
                    "name": "DASH",
                    "full_name": "Dash"
                },
                {
                   "id": "4847",
                    "name": "STX",
                    "full_name": "Stacks"
                },
                {
                   "id": "7186",
                    "name": "CAKE",
                    "full_name": "PancakeSwap"
                },
                {
                   "id": "18069",
                    "name": "GMT",
                    "full_name": "STEPN"
                },
                {
                   "id": "5034",
                    "name": "KSM",
                    "full_name": "Kusama"
                },
                {
                   "id": "2130",
                    "name": "ENJ",
                    "full_name": "Enjin Coin"
                },
                {
                   "id": "6538",
                    "name": "CRV",
                    "full_name": "Curve DAO Token"
                },
                {
                   "id": "8642",
                    "name": "FEI",
                    "full_name": "Fei USD"
                },
                {
                   "id": "6945",
                    "name": "AMP",
                    "full_name": "Amp"
                },
                {
                   "id": "5567",
                    "name": "CELO",
                    "full_name": "Celo"
                },
                {
                   "id": "7080",
                    "name": "GALA",
                    "full_name": "Gala"
                },
                {
                   "id": "2694",
                    "name": "NEXO",
                    "full_name": "Nexo"
                },
                {
                   "id": "4846",
                    "name": "KAVA",
                    "full_name": "Kava"
                },
                {
                   "id": "2682",
                    "name": "HOT",
                    "full_name": "Holo"
                },
                {
                   "id": "8104",
                    "name": "1INCH",
                    "full_name": "1inch Network"
                },
                {
                   "id": "873",
                    "name": "XEM",
                    "full_name": "NEM"
                },
                {
                   "id": "2634",
                    "name": "XDC",
                    "full_name": "XDC Network"
                },
                {
                   "id": "2586",
                    "name": "SNX",
                    "full_name": "Synthetix"
                },
                {
                   "id": "8646",
                    "name": "MINA",
                    "full_name": "Mina"
                },
                {
                   "id": "1168",
                    "name": "DCR",
                    "full_name": "Decred"
                },
                {
                   "id": "4269",
                    "name": "GT",
                    "full_name": "GateToken"
                },
                {
                   "id": "3945",
                    "name": "ONE",
                    "full_name": "Harmony"
                },
                {
                   "id": "5632",
                    "name": "AR",
                    "full_name": "Arweave"
                },
                {
                   "id": "5647",
                    "name": "KDA",
                    "full_name": "Kadena"
                },
                {
                   "id": "5692",
                    "name": "COMP",
                    "full_name": "Compound"
                },
                {
                   "id": "8677",
                    "name": "XYM",
                    "full_name": "Symbol"
                },
                {
                   "id": "1659",
                    "name": "GNO",
                    "full_name": "Gnosis"
                },
                {
                   "id": "1684",
                    "name": "QTUM",
                    "full_name": "Qtum"
                },
                {
                   "id": "2083",
                    "name": "BTG",
                    "full_name": "Bitcoin Gold"
                },
                {
                   "id": "9903",
                    "name": "CVX",
                    "full_name": "Convex Finance"
                }
            ]
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
            filteredList() {
                return this.list.filter((result) => {
                    return result.full_name.toLowerCase().match(this.filterInput.toLowerCase()) ||
                        result.name.toLowerCase().match(this.filterInput.toLowerCase());
                });
            }
        }
    }
</script>
