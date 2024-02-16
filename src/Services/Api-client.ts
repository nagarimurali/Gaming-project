import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'accfea215a2d4aa2931175b14fc5123a'
    }
})