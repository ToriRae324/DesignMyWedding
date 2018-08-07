//foursquare
// Client ID
// C5HYUJIN3EP2ISCGSDCBSKNVJVXMC5SI5NGKDPEJ5K34Z5EZ
// Client Secret
// 3QCICWJBPHBMJTCFN14ZFPVO30EENPNI40SPV2JQCXGADQCJ
import axios from "axios"

export default {
    getVenues: function(searchObj) {
      return axios.get({
        url: 'https://api.foursquare.com/v2/venues/explore',
        method: 'GET',
        qs: {
          client_id: 'C5HYUJIN3EP2ISCGSDCBSKNVJVXMC5SI5NGKDPEJ5K34Z5EZ',
          client_secret: '3QCICWJBPHBMJTCFN14ZFPVO30EENPNI40SPV2JQCXGADQCJ',
          ll: '40.7243,-74.0018',
          query: 'Wedding',
          v: '20180323',
          limit: 10
        }
      }.then(function(err, res, body) {
        if (err) {
          console.error(err);
        } else {
          res.json(body);
        }
      }));
    }
  };

  