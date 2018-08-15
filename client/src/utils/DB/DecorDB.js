import axios from "axios"
import Auth from "../../modules/Auth"
export default {
    get: function() {
      return axios.post("/api/decors", 
    {
      id: Auth.getId()
    });
    },
    delete: function(id) {
      return axios.delete("/api/decors/" + id);
    },
    save: function(decorData) {
      console.log(decorData)
      return axios.post("/api/decors", {
        decorData: decorData,
        id: Auth.getId()
      });
    },
    update: function(decorData) {
      return axios.put("/api/decors/"+decorData.id)
    },
    getById: function(id) {
      return axios.get("/api/decors/"+id)
    }
  };