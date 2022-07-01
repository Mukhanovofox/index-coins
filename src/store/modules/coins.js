import axios from "../../plugins/axios";
import moment from 'moment';
export const GET_COIN_INFO = "GET_COIN_INFO";
export const SELECT_COIN_OR_DATE_RANGE = "SELECT_COIN_OR_DATE_RANGE";
export const UPDATE_COIN_FORM = "UPDATE_COIN_FORM";
export const COIN_LOADING_TOGGLE = "COIN_LOADING_TOGGLE";
export const UPDATE_COIN_INFO = "UPDATE_COIN_INFO";

const state = {
    coin_loading: true,
    coin_form: {
        "coin_id": "1",
        "start_date": moment().subtract(1, 'w').format('YYYY-MM-DD'),
        "end_date": moment().format('YYYY-MM-DD')
    },
    coin_info: []
}

const actions = {
    [GET_COIN_INFO]: async (store) => {
         const {data} = await axios({url: 'api/coins_supply/?coin_id='+state.coin_form.coin_id+'&start_date='+state.coin_form.start_date+'&end_date='+state.coin_form.end_date, method:'GET'});
//        let data = [{
//            "id": 1021338,
//            "date": "2022-06-01",
//            "coin_id": 1,
//            "coin_symbol": "BTC",
//            "coin_name": "Bitcoin",
//            "market_cap": 564669039321.6759,
//            "price_USD": 29632.612045788588,
//            "total_supply": 19055662.0,
//            "circulating_supply": 19055662.0
//        }, {
//            "id": 1024143,
//            "date": "2022-06-02",
//            "coin_id": 1,
//            "coin_symbol": "BTC",
//            "coin_name": "Bitcoin",
//            "market_cap": 577986087412.4869,
//            "price_USD": 30330.268227433735,
//            "total_supply": 19056412.0,
//            "circulating_supply": 19056412.0
//        }, {
//            "id": 1026947,
//            "date": "2022-06-03",
//            "coin_id": 1,
//            "coin_symbol": "BTC",
//            "coin_name": "Bitcoin",
//            "market_cap": 568131172992.1445,
//            "price_USD": 29811.686274019405,
//            "total_supply": 19057331.0,
//            "circulating_supply": 19057331.0
//        }, {
//            "id": 1029751,
//            "date": "2022-06-04",
//            "coin_id": 1,
//            "coin_symbol": "BTC",
//            "coin_name": "Bitcoin",
//            "market_cap": 568127412099.5042,
//            "price_USD": 29810.18904653577,
//            "total_supply": 19058162.0,
//            "circulating_supply": 19058162.0
//        }, {
//            "id": 1032552,
//            "date": "2022-06-05",
//            "coin_id": 1,
//            "coin_symbol": "BTC",
//            "coin_name": "Bitcoin",
//            "market_cap": 570718012298.9373,
//            "price_USD": 29944.62765625897,
//            "total_supply": 19059112.0,
//            "circulating_supply": 19059112.0
//        }, {
//            "id": 1035354,
//            "date": "2022-06-06",
//            "coin_id": 1,
//            "coin_symbol": "BTC",
//            "coin_name": "Bitcoin",
//            "market_cap": 600539349351.5684,
//            "price_USD": 31507.84731933366,
//            "total_supply": 19059993.0,
//            "circulating_supply": 19059993.0
//        }, {
//            "id": 1038157,
//            "date": "2022-06-07",
//            "coin_id": 1,
//            "coin_symbol": "BTC",
//            "coin_name": "Bitcoin",
//            "market_cap": 598883469419.0127,
//            "price_USD": 31419.22766159329,
//            "total_supply": 19061050.0,
//            "circulating_supply": 19061050.0
//        }, {
//            "id": 1040959,
//            "date": "2022-06-08",
//            "coin_id": 1,
//            "coin_symbol": "BTC",
//            "coin_name": "Bitcoin",
//            "market_cap": 578800033861.6361,
//            "price_USD": 30363.849115056793,
//            "total_supply": 19062143.0,
//            "circulating_supply": 19062143.0
//        }, {
//            "id": 1043757,
//            "date": "2022-06-09",
//            "coin_id": 1,
//            "coin_symbol": "BTC",
//            "coin_name": "Bitcoin",
//            "market_cap": 574896037851.4813,
//            "price_USD": 30157.582077107487,
//            "total_supply": 19063068.0,
//            "circulating_supply": 19063068.0
//        }, {
//            "id": 1046541,
//            "date": "2022-06-10",
//            "coin_id": 1,
//            "coin_symbol": "BTC",
//            "coin_name": "Bitcoin",
//            "market_cap": 557550178293.3081,
//            "price_USD": 29246.204986446617,
//            "total_supply": 19064018.0,
//            "circulating_supply": 19064018.0
//        }];
        await store.commit(UPDATE_COIN_INFO, data);
        await store.commit(COIN_LOADING_TOGGLE, false);
        // return data;
    },
    [SELECT_COIN_OR_DATE_RANGE]: async (store, value) => {
        await store.commit(UPDATE_COIN_FORM, value);
        store.commit(COIN_LOADING_TOGGLE, true);
        store.dispatch(GET_COIN_INFO);
    },
}

const mutations = {
    [UPDATE_COIN_FORM]: (state, payload) => {
        state.coin_form = payload
    },
    [COIN_LOADING_TOGGLE]:(state, value)=>{
        state.coin_loading = value;
    },
    [UPDATE_COIN_INFO]:(state, value)=>{
        state.coin_info = value;
    }
}

const getters = {
    get_coin_info: (state) => state.coin_info,
    get_coin_form: (state) => state.coin_form,
    get_coin_loading: (state) => state.coin_loading,
}
export default {
    state,
    actions,
    mutations,
    getters
}
