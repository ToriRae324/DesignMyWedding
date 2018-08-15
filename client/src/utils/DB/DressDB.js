import axios from "axios";
import Auth from "../../modules/Auth";

export default {
    get: function() {
      return axios.post("/api/Dresses");
    },
    delete: function(id) {
      return axios.delete("/api/Dresses/" + id);
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