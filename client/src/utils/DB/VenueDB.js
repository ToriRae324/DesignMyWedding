import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/venues");
    },
    delete: function(id) {
      return axios.delete("/api/venues/" + id);
    },
    save: function(venueData) {
      return axios.post("/api/venues", venueData);
    },
    update: function(venueData) {
      return axios.put("/api/venues/"+venueData.id)
    },
    getById: function(id) {
      return axios.get("/api/venues/"+id)
    }
  };