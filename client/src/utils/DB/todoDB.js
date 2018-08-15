import axios from "axios"
import Auth from "../../modules/Auth";

export default {
    get: function() {
      return axios.post("/api/todos",{
        id: Auth.getId()
      });
    },
    delete: function(id) {
      return axios.delete("/api/todos/" + id);
    },
    save: function(todoData) {
      return axios.post("/api/todos/add", {
        todoData: todoData,
        id: Auth.getId()
      });
    },
    update: function(todoData) {
      return axios.put("/api/todos/"+todoData._id)
    },
    // never used
    getById: function(id) {
      return axios.get("/api/todos/"+id)
    }
  };