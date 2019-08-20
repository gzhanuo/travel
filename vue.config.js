const mockIndexData = require("./public/mock/index.json");
const mockCityData = require("./public/mock/city.json")
const mockDetailData = require("./public/mock/detail.json")
 
module.exports = {
  //...  
  publicPath: './',
  devServer: {
    port: 8080,
    before(app) {
      app.get("/api/index.json", (req, res) => {
        res.json(mockIndexData);
      }),
      app.get("/api/city.json", (req, res) => {
        res.json(mockCityData);
      }),
      app.get("/api/detail.json", (req, res) => {
        res.json(mockDetailData);
      })
    }
  }
};