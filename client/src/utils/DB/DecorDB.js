import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/decors");
    },
    delete: function(id) {
      return axios.delete("/api/decors/" + id);
    },
    save: function(decorData) {
      return axios.post("/api/decors", decorData);
    },
    update: function(decorData) {
      return axios.put("/api/decors/"+decorData.id)
    },
    getById: function(id) {
      return axios.get("/api/decors/"+id)
    }
  };