const router = require("express").Router();
const request = require("request")

// Matches with "/api/Dresses"
router.route("/:type/:query")
  .get(function(req,res){
    const BASEURL = "https://openapi.etsy.com/v2/listings/active";
    const API_KEY = "?api_key=bvnaauvi6o2lhj5i298bi71o";
    let Category = ""
    if(req.params.type === "clothing")
    Category = "&category=weddings/clothing/";
    else 
    Category = "&category=weddings/"
    const Params = "&limit=50&fields=title,price,currency_code,url&includes=Images(url_170x135),Shop";
    query = req.params.query
    request(BASEURL + API_KEY + Category + query + Params, function(err,response,body){
        if(err) {
        console.log(err)
        }
        else{
        //console.log(response.body)
        res.json(JSON.parse(body))
        }
    })
  })

module.exports = router;