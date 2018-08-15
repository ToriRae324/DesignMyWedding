import axios from "axios"
import Auth from "../../modules/Auth"
export default {
    get: function() {
      return axios.post("/api/decors",{
      id: Auth.getId()
    });
    },
    delete: function(decorId) {
      return axios.post("/api/decors/" + decorId,
    {
      id: Auth.getId()
    });
    },
    save: function(decorData) {
      return axios.post("/api/decors/add", {
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