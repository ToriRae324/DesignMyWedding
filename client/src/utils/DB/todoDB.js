import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/todos");
    },
    delete: function(id) {
      return axios.delete("/api/todos/" + id);
    },
    save: function(todoData) {
      return axios.post("/api/todos", todoData);
    },
    update: function(todoData) {
      return axios.put("/api/todos/"+todoData._id)
    },
    getById: function(id) {
      return axios.get("/api/todos/"+id)
    }
  };