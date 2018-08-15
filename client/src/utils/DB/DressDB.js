import axios from "axios";
import Auth from "../../modules/Auth";

export default {
    get: function() {
      return axios.post("/api/Dresses",
    {
      id: Auth.getId()
    });
    },
    delete: function(dressId) {
      return axios.post("/api/Dresses/" + dressId,{
        id: Auth.getId()
      });
    },
    save: function(dressData) {
      return axios.post("/api/Dresses/add", {
        dressData:dressData,
        id: Auth.getId()
      });
    },
    update: function(dressData) {
      return axios.put("/api/Dresses/"+dressData.id)
    },
    getById: function(id) {
      return axios.get("/api/Dresses/"+id)
    }
  };