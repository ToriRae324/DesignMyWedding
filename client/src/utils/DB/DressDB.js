import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/Dresses");
    },
    delete: function(id) {
      return axios.delete("/api/Dresses/" + id);
    },
    save: function(dressData) {
      return axios.post("/api/Dresses", dressData);
    },
    update: function(dressData) {
      return axios.put("/api/Dresses/"+dressData.id)
    },
    getById: function(id) {
      return axios.get("/api/Dresses/"+id)
    }
  };