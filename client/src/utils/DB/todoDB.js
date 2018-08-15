import axios from "axios"
import Auth from "../../modules/Auth";

export default {
    get: function() {
      return axios.post("/api/todos",{
        id: Auth.getId()
      });
    },
    delete: function(todoId) {
      return axios.post("/api/todos/delete/" + todoId, 
    {
      id: Auth.getId() 
    });
    },
    save: function(todoData) {
      return axios.post("/api/todos/add", {
        todoData: todoData,
        id: Auth.getId()
      });
    },
    update: function(todoData) {
      return axios.post("/api/todos/complete/"+todoData._id,
      {
        id: Auth.getId() 
      });
    },
    // never used
    getById: function(id) {
      return axios.get("/api/todos/"+id)
    }
  };