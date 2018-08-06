import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/venues");
    },
    delete: function(id) {
      return axios.delete("/api/venues/" + id);
    },
    save: function(articleData) {
      return axios.post("/api/venues", articleData);
    },
    update: function(articleData) {
      return axios.put("/api/venues/"+article.id)
    },
    getById: function(id) {
      return axios.get("/api/venues/"+id)
    }
  };