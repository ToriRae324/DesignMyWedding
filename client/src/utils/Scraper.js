import axios from "axios"
import cheerio from "cheerio"

export default {
    getPhoto: function(url){
    
    axios.get(url).then(function(res){ 
    
      var $ = cheerio.load(res.data);
      
      var photoUrl = [];
      $("img").each(function (i, element) {
        var photo = $("img").attr("src")
        photoUrl.push(photo)
      })
     return photoUrl[photoUrl.length - 1]
    })},
    loaded: function() {
        return true
    }
    

}