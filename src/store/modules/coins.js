import axios from "../../plugins/axios";

export const GET_COINS_SUPPLY = "GET_COINS_SUPPLY"

const actions = {
    // [GET_COINS_SUPPLY]:async (store, value)=>{
    //     const { data }  = await axios({url:'api/coins_supply/?coin_id=1&start_date=2022-06-01&end_date=2022-06-10',params:value , method:'GET'})
    //     return data;
    // },
    [GET_COINS_SUPPLY]:async ()=>{
        const { data }  = await axios({url:'pairs', method:'GET'})
        return data;
    },
}

export default {
    actions
}
