import axios from 'axios';

var weatherHelper = function () {
  return {
    apiKey: "001e31fde7431e127c3a20917472a6bb",
    getUrl: function (city) {
      return "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&mode=json&appid=" + this.apiKey;
    },
    getWeather: function (city) {
      return axios.get(this.getUrl(city));
    }
  }
}();

export default weatherHelper;
