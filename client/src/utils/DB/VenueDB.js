import axios from "axios"
import Auth from "../../modules/Auth"

export default {
    get: function() {
      return axios.get("/api/venues");
    },
    delete: function(id) {
      return axios.delete("/api/venues/" + id);
    },
    save: function(venueData) {
      return axios.post("/api/Venues", {
        venueData: venueData,
        id: Auth.getId()
      }
      );
    },
    update: function(venueData) {
      return axios.put("/api/venues/"+venueData.id)
    },
    getById: function(id) {
      return axios.get("/api/venues/"+id)
    }
  };