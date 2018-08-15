//etsy

import axios from "axios";
// Export search results from etsy
export default {
  search: function(Query) {
    return axios.get("/auth/etsy/decor/"+Query);
  }
};
