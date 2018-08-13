const request = require("request")
module.exports = {
    find: function (query) {
        const BASEURL = "https://openapi.etsy.com/v2/listings/active";
        const API_KEY = "?api_key=bvnaauvi6o2lhj5i298bi71o";
        const Category = "&category=weddings/clothing/";
        const Params = "&limit=2&fields=title,price,currency_code,url&includes=Images(url_170x135),Shop";
        console.log(query)
        console.log(BASEURL + API_KEY + Category + "wedding_gown" + Params)
        request(BASEURL + API_KEY + Category + "wedding_gown" + Params, function(err,res,body){
            if(err) 
            console.log(err)
            return(res.body)
        })

    }
}