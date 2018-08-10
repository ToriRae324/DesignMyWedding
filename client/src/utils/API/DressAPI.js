//etsy

import axios from "axios";

const BASEURL = "https://openapi.etsy.com/v2/listings/active";
const API_KEY = "?api_key=bvnaauvi6o2lhj5i298bi71o";
const Category = "&category=weddings/clothing/";
const Query= "wedding_gown";
const Params= "&limit=50&fields=title,price,currency_code,url&includes=Images(url_170x135),Shop";


// Export search results from etsy
export default {
  search: function(Query) {
    return axios.get(BASEURL + API_KEY + Category + Query + Params);
  }
};
