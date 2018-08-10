import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/todos");
    },
    delete: function(id) {
      return axios.delete("/api/todos/" + id);
    },
    save: function(dressData) {
      return axios.post("/api/todos", dressData);
    },
    update: function(dressData) {
      return axios.put("/api/todos/"+dressData.id)
    },
    getById: function(id) {
      return axios.get("/api/todos/"+id)
    }
  };