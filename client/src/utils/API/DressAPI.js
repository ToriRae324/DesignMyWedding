import axios from "axios"
export default {
  get: function(query) {
    const BASEURL = "https://openapi.etsy.com/v2/listings/active";
        const API_KEY = "?api_key=bvnaauvi6o2lhj5i298bi71o";
        const Category = "&category=weddings/clothing/";
        const Params = "&limit=50&fields=title,price,currency_code,url&includes=Images(url_170x135),Shop";
        return axios(BASEURL + API_KEY + Category + query + Params)
        }
  }

