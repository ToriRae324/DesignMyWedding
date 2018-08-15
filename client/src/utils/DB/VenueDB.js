import axios from "axios";
import Auth from '../../modules/Auth';

export default {
    get: function() {
      return axios.post("/api/venues",
    {
      id: Auth.getId()
    });
    },
    delete: function(id) {
      return axios.post("/api/venues/" + id,
    {
      id: Auth.getId()
    });
    },
    save: function(venueData) {
      return axios.post("/api/Venues/add", {
        venueData: venueData,
      id: Auth.getId()
    });
    },
    update: function(venueData) {
      return axios.put("/api/venues/"+venueData.id)
    },
    getById: function(id) {
      return axios.get("/api/venues/"+id)
    }
  };