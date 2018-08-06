import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/Dresses");
    },
    delete: function(id) {
      return axios.delete("/api/Dresses/" + id);
    },
    save: function(articleData) {
      return axios.post("/api/Dresses", articleData);
    },
    update: function(articleData) {
      return axios.put("/api/Dresses/"+article.id)
    },
    getById: function(id) {
      return axios.get("/api/Dresses/"+id)
    }
  };