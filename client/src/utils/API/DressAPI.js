import axios from "axios"
export default {
  get: function(Query) {
    return axios.get("/api/etsyDress");
  }
};
