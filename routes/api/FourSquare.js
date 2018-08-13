const router = require("express").Router();
const request = require("request")

// Matches with "/api/Dresses"
router.route("/:location/:query")
  .get(function(req,res){
    const venueUrl = "https://api.foursquare.com/v2/venues/explore?query="+req.params.query+"&near="+req.params.location+"&limit=10&oauth_token=SO50G20F51NLW0ORZ53S3MVFTNMP15Y5FG0IMWBMGKIOEI1P&v=201800807"
    request(venueUrl, function(err,response,body){
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