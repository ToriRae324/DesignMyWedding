//foursquare
// Client ID
// C5HYUJIN3EP2ISCGSDCBSKNVJVXMC5SI5NGKDPEJ5K34Z5EZ
// Client Secret
// 3QCICWJBPHBMJTCFN14ZFPVO30EENPNI40SPV2JQCXGADQCJ

//https://api.foursquare.com/v2/venues/explore?query=Wedding Hall&near=Charlotte&limit=10&oauth_token=SO50G20F51NLW0ORZ53S3MVFTNMP15Y5FG0IMWBMGKIOEI1P&v=2018
import axios from "axios"
/*
venue selection possibilities
- churches
- wedding halls
- country club
- park
- hotel
*/ 
export default {
    getVenues: function(venue, location) {
      const venueUrl = "https://api.foursquare.com/v2/venues/explore?query="+venue+"&near="+location+"&limit=10&oauth_token=SO50G20F51NLW0ORZ53S3MVFTNMP15Y5FG0IMWBMGKIOEI1P&v=201800807"
      return axios.get(venueUrl)
    // },
    // getWeddingHallVenues: function(location) {
    //   const weddingHallUrl = "https://api.foursquare.com/v2/venues/explore?venues/explore?query=WeddingHall&near="+location+"&limit=10&oauth_token=SO50G20F51NLW0ORZ53S3MVFTNMP15Y5FG0IMWBMGKIOEI1P&v=2018"
    //   return axios.get(churchesUrl)
    // },
    // getCountryClubVenues: function(location) {
    //   const weddingCountryClub = "https://api.foursquare.com/v2/venues/explore?query=country club&near="+location+"&limit=10&oauth_token=SO50G20F51NLW0ORZ53S3MVFTNMP15Y5FG0IMWBMGKIOEI1P&v=20180807"
    //   return axios.get(churchesUrl)
    // },
    // getHotelVenues: function(location) {
    //   const weddingHallUrl = "https://api.foursquare.com/v2/venues/explore?query=hotel&near="+location+"&limit=10&oauth_token=SO50G20F51NLW0ORZ53S3MVFTNMP15Y5FG0IMWBMGKIOEI1P&v=20180807"
    //   return axios.get(churchesUrl)
    // }, 
    // getParkVenues: function(location) {
    //   const weddingHallUrl = "https://api.foursquare.com/v2/venues/explore?query=park&near="+location+"&limit=10&oauth_token=SO50G20F51NLW0ORZ53S3MVFTNMP15Y5FG0IMWBMGKIOEI1P&v=20180807"
    //   return axios.get(churchesUrl)
    }
  };

  