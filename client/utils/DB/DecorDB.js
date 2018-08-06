import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/decors");
    },
    delete: function(id) {
      return axios.delete("/api/decors/" + id);
    },
    save: function(articleData) {
      return axios.post("/api/decors", articleData);
    },
    update: function(articleData) {
      return axios.put("/api/decors/"+article.id)
    },
    getById: function(id) {
      return axios.get("/api/decors/"+id)
    }
  };