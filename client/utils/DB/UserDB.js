import axios from "axios"

export default {
    // get: function() {
    //   return axios.get("/api/users");
    // },
    // delete: function(id) {
    //   return axios.delete("/api/users/" + id);
    // },
    create: function(userData) {
      return axios.post("/api/users", userData);
    },
    // update: function(userData) {
    //   return axios.put("/api/users/"+user.id)
    // },
    getById: function(id) {
      return axios.get("/api/users/"+id)
    }
  };